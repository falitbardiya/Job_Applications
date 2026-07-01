
import Card from './components/Card'
const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png",
    nameOfCompany: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr", 
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/3840px-Microsoft_logo.svg.png",
    nameOfCompany: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$62/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/0/747.png",
    nameOfCompany: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$78/hr",
    location: "Cupertino, California"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/40/2/amazon-icon-logo-png_seeklogo-405254.png",
    nameOfCompany: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://images.icon-icons.com/2890/PNG/512/apps_media_netflix_logo_website_movie_series_multimedia_streaming_stream_icon_182738.png",
    nameOfCompany: "Netflix",
    datePosted: "2 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$88/hr",
    location: "Los Gatos, California"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/054/650/807/non_2x/nvidia-logo-rounded-nvidia-logo-free-png.png",
    nameOfCompany: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Pune, India"
  }
];
  return (
    <div className="parent">
      {jobOpenings.map(function(elem,idx){

        return <div key={idx}>
              <Card company={elem.nameOfCompany} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} dateposted={elem.datePosted} pay={elem.pay} brandLogo={elem.brandLogo}/>
        </div>
      })}
    </div>
  )
}

export default App