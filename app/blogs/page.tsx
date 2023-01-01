import supabase from "../../utils/supabase";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function getData() {
  const { data } = await supabase.from("blogs").select();
  return { data };
}

interface Blog {
  title: string;
  content: string;
  author: string;
  created_at: string;
  image: string;
}

export default async function About() {
  const { data } = await getData();

  function DisplayUsers() {
    return (
      <>
        {data?.map((user: Blog, index) => (
          <div
            key={index}
            className="flex flex-wrap md:flex-no-wrap ml-0 md:ml-200 mr-0 md:mr-200"
          >
            <div className="w-full md:w-1/2 p-4">
              <Image
                src={user.image}
                alt="image"
                width={250}
                height={150}
                loading="lazy"
                className="object-contain mx-auto md:mx-0"
              />
            </div>

            <div className="w-full md:w-1/2 p-4 gap-10">
              <h3>{user.title}</h3>
              <p>{user.content}</p>
              <p>{user.author}</p>
              <p>{user.created_at}</p>

              <div className="div buttons">
                <button>React</button>
                <button>Comment</button>
                <button>Share</button>
              </div>

              <button className="bg-blue-500 hover:bg-blue-700 focus:bg-blue-800 active:bg-blue-900 bg-gradient-blue-500 text-white font-bold py-2 px-4 rounded-full">
                Read More
              </button>
            </div>
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
