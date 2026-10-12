import { useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { profile } from "../data/content";

const EMPTY = {
  name: "",
  email: "",
  company: "",
  phone: "",
  type: "",
  currentSite: "",
  budget: "",
  timeline: "",
  designReady: "",
  roleType: "",
  workMode: "",
  message: "",
  contactPref: "email",
  _honey: "",
};

function Field({ id, label, optional, children }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
        {optional ? <span className="opt"> ({optional})</span> : <span className="req"> *</span>}
      </label>
      {children}
    </div>
  );
}

function Select({ id, value, onChange, options, placeholder, required }) {
  return (
    <select id={id} name={id} value={value} onChange={onChange} required={required}>
      <option value="">{placeholder}</option>
      {Object.entries(options).map(([k, v]) => (
        <option key={k} value={k}>
          {v}
        </option>
      ))}
    </select>
  );
}

export default function ProjectForm() {
  const { t } = useLang();
  const f = t.form;
  const [data, setData] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [invalid, setInvalid] = useState(false);

  const hiring = data.type === "hiring";
  const set = (e) => {
    setData((d) => ({ ...d, [e.target.name]: e.target.value }));
    if (invalid) setInvalid(false);
    if (status === "error") setStatus("idle");
  };

  // Human-readable labels go into the email, not internal keys
  const label = (group, key) => (key ? f[group][key] : "—");

  async function onSubmit(e) {
    e.preventDefault();
    if (data._honey) return; // bot
    if (!data.name.trim() || !data.email.trim() || !data.type || !data.message.trim()) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    setStatus("sending");

    const payload = {
      _subject: `New ${hiring ? "job offer" : "project request"} from ${data.name} (${label("types", data.type)})`,
      _template: "table",
      _captcha: "false",
      _replyto: data.email,
      Name: data.name,
      Email: data.email,
      "Company / business": data.company || "—",
      "WhatsApp / phone": data.phone || "—",
      "Request type": label("types", data.type),
      ...(hiring
        ? {
            "Position type": label("roleTypes", data.roleType),
            "Work mode": label("workModes", data.workMode),
          }
        : {
            "Current website": data.currentSite || "—",
            Budget: label("budgets", data.budget),
            Timeline: label("timelines", data.timeline),
            "Design ready": label("designs", data.designReady),
          }),
      "Preferred contact": label("prefs", data.contactPref),
      Message: data.message,
    };

    try {
      const res = await fetch(profile.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) === "false") throw new Error(json.message || "Request failed");
      setStatus("sent");
      setData(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-card form-done" role="status">
        <i className="fa-solid fa-circle-check" />
        <p>{f.success}</p>
        <button type="button" className="btn btn--ghost btn--sm" onClick={() => setStatus("idle")}>
          {f.another}
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate data-aos="fade-up">
      <h3>{f.title}</h3>

      {/* honeypot: hidden from people, bots fill it */}
      <input type="text" name="_honey" value={data._honey} onChange={set} className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="form-grid">
        <Field id="name" label={f.name}>
          <input id="name" name="name" value={data.name} onChange={set} autoComplete="name" required />
        </Field>
        <Field id="email" label={f.email}>
          <input id="email" name="email" type="email" value={data.email} onChange={set} autoComplete="email" required />
        </Field>
        <Field id="company" label={f.company} optional={f.optional}>
          <input id="company" name="company" value={data.company} onChange={set} autoComplete="organization" />
        </Field>
        <Field id="phone" label={f.phone} optional={f.optional}>
          <input id="phone" name="phone" type="tel" value={data.phone} onChange={set} autoComplete="tel" />
        </Field>

        <div className="form-field form-field--full">
          <Field id="type" label={f.type}>
            <Select id="type" value={data.type} onChange={set} options={f.types} placeholder={f.select} required />
          </Field>
        </div>

        {data.type && !hiring && (
          <>
            <Field id="budget" label={f.budget} optional={f.optional}>
              <Select id="budget" value={data.budget} onChange={set} options={f.budgets} placeholder={f.select} />
            </Field>
            <Field id="timeline" label={f.timeline} optional={f.optional}>
              <Select id="timeline" value={data.timeline} onChange={set} options={f.timelines} placeholder={f.select} />
            </Field>
            <Field id="designReady" label={f.designReady} optional={f.optional}>
              <Select id="designReady" value={data.designReady} onChange={set} options={f.designs} placeholder={f.select} />
            </Field>
            <Field id="currentSite" label={f.currentSite} optional={f.optional}>
              <input id="currentSite" name="currentSite" type="url" placeholder="https://" value={data.currentSite} onChange={set} />
            </Field>
          </>
        )}

        {hiring && (
          <>
            <Field id="roleType" label={f.roleType} optional={f.optional}>
              <Select id="roleType" value={data.roleType} onChange={set} options={f.roleTypes} placeholder={f.select} />
            </Field>
            <Field id="workMode" label={f.workMode} optional={f.optional}>
              <Select id="workMode" value={data.workMode} onChange={set} options={f.workModes} placeholder={f.select} />
            </Field>
          </>
        )}

        <div className="form-field form-field--full">
          <Field id="message" label={hiring ? f.messageHiring : f.message}>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={data.message}
              onChange={set}
              placeholder={hiring ? f.messagePhHiring : f.messagePh}
              required
            />
          </Field>
        </div>

        <fieldset className="form-field form-field--full prefs">
          <legend>{f.contactPref}</legend>
          {Object.entries(f.prefs).map(([k, v]) => (
            <label key={k} className={`pill ${data.contactPref === k ? "is-on" : ""}`}>
              <input type="radio" name="contactPref" value={k} checked={data.contactPref === k} onChange={set} />
              {v}
            </label>
          ))}
        </fieldset>
      </div>

      {invalid && <p className="form-msg form-msg--warn">{f.required}</p>}
      {status === "error" && (
        <p className="form-msg form-msg--err">
          {f.error} <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      )}

      <button type="submit" className="btn btn--primary form-submit" disabled={status === "sending"}>
        <i className={status === "sending" ? "fa-solid fa-spinner fa-spin" : "fa-solid fa-paper-plane"} />{" "}
        {status === "sending" ? f.sending : f.send}
      </button>
    </form>
  );
}
