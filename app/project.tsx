import { FocusCards } from "./components/ui/card-project"

export function Project(){
  const Cards = [
    {
      title: "Forest Adventure",
      src: "/projek1.jpg",
      link: "https://www.instagram.com/reel/DGdKIkpSaTi/?igsh=MWo2NXJ5ZW11ejhudw=="
    },
    {
      title: "Samsung Zflip 3",
      src: "/projek2.jpg",
      link: "https://www.instagram.com/reel/DGdKIkpSaTi/?igsh=MWo2NXJ5ZW11ejhudw=="
    },
    {
      title: "Erafone",
      src: "/projek3.jpg",
      link: "https://www.instagram.com/reel/DGHU3PdzFrv/?igsh=MXNqNjI5aGFkeHk4bQ=="
    },
    {
      title: "Vivo X200",
      src: "/projek4.jpg",
      link: "https://www.instagram.com/reel/DFsE1Eyy1O4/?igsh=enluaG5xNWdmMzUx"
    },
    {
      title: "Waterfall",
      src: "/projek5.jpg",
      link: "https://www.instagram.com/reel/Cf6rTjgjdkV/?igsh=Nm5jZ2xucjhpeDNi"
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
      link: "https://the-first-rule.vercel.app/"
    },
  ];
return (
  <div>
<h1 className="text-5xl text-center font-bold mb-10">Project</h1>
<FocusCards cards={Cards} />
  </div>
)

}