export interface Person {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  event_ids: String[];
}
export interface Event {
  id: string;
  name: string;
  form_fields: FormField[];
}

export interface Owner {
  id: string;
  name: string;
  event_ids: String[];
}

export interface Data {
  form_data: Record<string, string | boolean>;
}

export interface FormField {
  field: string;
  label: string;
  type: "string" | "number" | "boolean" | "choices";
  choices?: FormFieldChoice[];
}

export interface FormFieldChoice {
  label: string;
  value: string;
}
