import { Person, Event, Owner } from "../lib/types";
import db from "./db";

// ==================== OWNER
export async function searchOwners(): Promise<Owner[]> {
  const ownerList = await db.collection("Owner").get();
  const owners: Owner[] = ownerList.docs.map((value) => value.data() as Owner);
  return owners;
}
export async function createOwner(owner: Owner): Promise<Owner> {
  await db.collection("Owner").doc(owner.id).set(owner);
  return owner as Owner;
}

export async function readOwner(id: string): Promise<Owner> {
  const docRef = await db.collection("Owner").doc(id).get();
  console.log("docRef", docRef.data());
  return docRef.data() as Owner;
}

export async function updateOwner(owner: Owner): Promise<void> {
  await db.collection("Owner").doc(owner.id).update(owner);
}

export async function deleteOwner(owner: Owner): Promise<void> {
  //await db.collection("Owner").doc(owner.id).update(owner);
  await db.collection("Owner").doc(owner.id).delete();
}

// ==================== PERSON
export async function searchPersonByIds(id: string[]): Promise<Person[]> {
  const personList = await db
    .collection("Person")
    .where("id", "in", id)
    .get();
    const persons: Person[] = personList.docs.map(
      (value) => value.data() as Person
    );
    return persons;
}

export async function createPerson(person: Person): Promise<Person> {
  await db.collection("Person").doc(person.id).set(person);
  return person as Person;
}
export async function readPerson(id: string): Promise<Person> {
  const docRef = await db.collection("Person").doc(id).get();
  return docRef.data() as Person;
}

export async function updatePerson(person: Person): Promise<void> {
  await db.collection("Person").doc(person.id).update(person);
}

export async function searchByEmail(email: string): Promise<Person> {
  const personSnap = await db
    .collection("Person")
    .where("email", "==", email)
    .get();
  const persons: Person[] = personSnap.docs.map(
    (value) => value.data() as Person
  );
  return persons[0]; //AVOID MORE THAN ONE WITH SAME EMAIL
}

// ==================== EVENT
export async function searchByIds(id: string[]): Promise<Event[]> {
  const eventList = await db.collection("Event").where("id", "in", id).get();
  const events: Event[] = eventList.docs.map((value) => value.data() as Event);
  return events;
}

export async function createEvent(event: Event): Promise<void> {
  await db.collection("Event").doc(event.id).set(event);
}

export async function readEvent(id: string): Promise<Event> {
  const docRef = await db.collection("Event").doc(id).get();
  return docRef.data() as Event;
}

export async function updateEvent(event: Event): Promise<void> {
  await db.collection("Event").doc(event.id).update(event);
}

export async function readEvents(): Promise<Event[]> {
  const eventsSnaps = await db.collection("Event").get();

  const events: Event[] = eventsSnaps.docs.map(
    (value) => value.data() as Event
  );
  return events;
}

export async function searchByOwnerEmail(email: string): Promise<Owner> {
  const ownerSnap = await db
    .collection("Owner")
    .where("email", "==", email)
    .get();
  const owners: Owner[] = ownerSnap.docs.map((value) => value.data() as Owner);
  return owners[0]; //AVOID MORE THAN ONE WITH SAME EMAIL
}
