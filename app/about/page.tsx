import supabase from "../../utils/supabase";
export const dynamic = "force-dynamic";

async function getData() {
  const { data } = await supabase.from("users").select();
  return { data };
}

interface User {
  firstname: string;
  lastname: string;
  email: string;
}

export default async function About() {
  const { data } = await getData();

  function DisplayUsers() {
    return (
      <>
        {data?.map((user: User, index) => (
          <div key={index}>
            <p>{user.firstname}</p>
            <p>{user.lastname}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </>
    );
  }

  return (
    <div>
      <DisplayUsers />
    </div>
  );
}
