import { useLocation } from "wouter";

export type User = {
  id: string;
  name: string;
  email: string;
  age?: number;
  gender?: string;
  city?: string;
  address?: string
};

export default function Card({id, email }: User) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ _, setLocation] = useLocation();

  return (
    <div
      onClick={() => setLocation("/user/" + id)}
      className="hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out flex w-[25rem] flex-col justify-center items-start pl-4 pr-3 py-3 rounded-xl bg-[#566168] shadow-md"
    >
      <img
        className="object-cover w-[3.125rem] rounded-3xl"
        src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
        alt="user-image"
      />
      <p>{email}</p>
    </div>
  );
}
