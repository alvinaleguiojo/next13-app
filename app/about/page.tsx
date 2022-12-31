import supabase from "../../utils/supabase";
export const dynamic = "force-dynamic";

async function getData() {
  const { data } = await supabase.from("users").select();
  return { data };
}

export default async function About() {
  const { data } = await getData();
  return <div>about {JSON.stringify(data, null, 2)}</div>;
}
