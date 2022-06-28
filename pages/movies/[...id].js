import { useRouter } from "next/router";


export default function Detail() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>{router.query.title || "Loading..."}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${router.query.imgurl}`} />
    </div>
  );
}