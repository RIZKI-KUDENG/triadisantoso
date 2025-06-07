export function Certificate() {
  return (
    <div className="container mx-auto min-h-screen px-4">
      <h1 className="text-5xl text-center font-bold py-8 " data-aos="fade-up">
        certification
      </h1>
      <div className="mx-auto grid grid-cols-4  max-sm:grid-cols-1 max-sm:place-items-center gap-1">
        <img src="/ser1.jpg" alt="" className="w-60 h-50"  />
        <img src="/ser2.jpg" alt="" className="w-60 h-50" />
        <img src="/ser3.jpg" alt="" className="w-60 h-50" />
        <img src="/ser4.jpg" alt="" className="w-60 h-50"  />
      </div>
    </div>
  );
}
