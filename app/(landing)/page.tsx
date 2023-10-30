import Card from "@/components/Card";
import Navbar from "@/components/navbar";

const dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 mt-10">
      <Navbar />
      <Card />
    </div>
  );
};

export default dashboard;
