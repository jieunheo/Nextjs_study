import { useRouter } from "next/router";
import Seo from "../../components/Seo";


export default function Detail({ params }) {
  const router = useRouter();
  // const [title, id] = router.query.params || [];
  const [title, id] = params || [];
  console.log(router);
  return (
    <div>
      <Seo title={title} />
      <h1>{title}</h1>
    </div>
  );
}

export async function getServerSideProps ({params: {params}}) {
  return {
    props: {
      params
    }
  }
}