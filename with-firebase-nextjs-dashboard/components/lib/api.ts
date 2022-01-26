import axios from "axios";
import { APIConnection } from "../stepzen/stepzenTypes";

async function fetchAPI(query: any, { variables }: APIConnection = {}) {
  const headers = {
    Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
    "Content-Type": "application/json",
  };

  const res = await fetch(`${process.env.STEPZEN_API_URL}`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getEvent() {
  const data = await fetchAPI(`
      query MyQuery {
        firebase_event_by_id(id: "p7463w445ine") {
          id
          location
          name
          form_fields {
            field
            label
            type
          }
        }
      } 
    `);
  return data?.firebase_event_by_id;
}

export async function checkUser(email): Promise<boolean> {
  console.log("checkUser >", email);
  return true;
}
//    console.log("Session >", session[0].user.email);//
async function searchOwnerByEmail(email): Promise<boolean> {
  var status = false;
  let queryPerson = `
      query MyQuery {
        firebase_person(email: "${email}") {
          events {
            name
            location
            id
            form_fields {
              type
              label
              field
            }
          }
        }
      }   
    `;
  let bodyLob = { query: queryPerson };

  await axios.post("/api/graphql", bodyLob).then((res) => {
    let person = res.data.data.data.firebase_person;
    console.log("searchOwnerByEmail person>", person);

    if (person.events[0] === null) {
      status = false;
      //NOT LOGGED IN router.push("/newvisitor");
    } else {
      //USER AUTHENTICATED
      status = true;
    }
  });
  console.log("status > ", status);
  return status;
}

export async function getOwnerByEmail() {
  // const personEmail = email

  const data = await fetchAPI(`
      query MyQuery {
          firebase_person(email: "isaacwi@gmail.com") {
          address
          assistance_before_covid
          email
          phone
          persons55_
          name
          persons018
          persons19_54
          job_before_covid
          info_SNAP
          info_KidCare
          info_JobTraining
          id
          event_ids
          }
    }          
  `);

  const person = data;

  return person;
}

export async function getOwner(email: any) {
    try {
      const data = await fetchAPI(
        `
        query MyQuery {
          firebase_owner_by_email(email: "${email}") {
            email
            event_ids
            id
            name
            events {
              id
              name
              location
              attendees {
                name
                address
                email
                id
                phone
              }
            }
          }
        }    
      `)
    
      return data?.firebase_owner_by_email
    } catch (e) {
      return e.message
    }
}