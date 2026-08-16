import { fetchBiodatas } from "./actions";
import BiodataList from "./BiodataList";

export const metadata = {
  title: "Manage Biodata | HumNikah Admin",
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function BiodataPage() { 
  const biodatas = await fetchBiodatas();
  
  return (
    <BiodataList initialBiodatas={biodatas} />
  ); 
}
