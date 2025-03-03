import React,{useState} from 'react'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import { Box, AppBar, Toolbar, MenuItem, Button } from '@mui/material'
import plant from '../assets/download.jpg';
import DownloadIcon from '@mui/icons-material/Download';
import resume from "../assets/Navyatha resume.pdf"

const MainPage = () => {
    const [profile, setProfile] = useState({
        name: "Donga Navyatha",
        about: "I am Donga Navyatha, a B.Tech Computer Science student at Sasi Institute of Technology and Engineering, with a strong foundation in C, Python, HTML, and CSS. I have completed internships in Machine Learning and Cloud Computing, and I am passionate about problem-solving, creative thinking, and continuous learning. With strengths in collaboration, patience, and communication, I enjoy working in teams and tackling new challenges. In my free time, I pursue interests like photography, traveling, and reading to expand my creativity and knowledge.",
        email: "navyatha213@gmail.com",
        phone: "9391355044",
        linkedin: "https://www.linkedin.com/in/donga-navyatha-8ba694280",
        address: "2-20/A-1/1, Santhinagar, Nidadavole, East Godavari District, AP, 534301",
        education: [
            "B.Tech in Computer Science, Sasi Institute of Technology and Engineering (7.85 CGPA, 2026)",
            "MPC, Tirumala Mahila Junior Kalasala (7.6 CGPA, 2022)",
            "SSC, Sasi English Medium School (8.8 CGPA, 2020)"
        ],
        skills: ["C Programming", "Python", "HTML", "CSS", "Problem Solving", "Creative Thinking", "Time Management"],
        internships: ["Machine Learning Internship - SkillDzire", "Cloud Virtual Internship - AICTE"],
        strengths: ["Collaboration", "Patience", "Communication Skills"],
        interests: ["Learning new things", "Photography", "Travelling", "Reading"],
        achievements: ["Senior Inter District Ball Badminton Championship - S.M.S Sanskrit High School Grounds"]
    });

    const abt="I’m Donga Navyatha, a B.Tech Computer Science student with expertise in C, Python, HTML, and CSS. I've completed internships in Machine Learning and Cloud Computing, and am passionate about problem-solving and continuous learning. Outside of academics, I enjoy photography, traveling, and reading to fuel my creativity."
    const interships=["Join SkillDzire as a Machine Learning Intern and work on real-world projects, applying ML algorithms to solve complex data problems. Gain hands-on experience with tools like Python, TensorFlow, and scikit-learn while collaborating with industry experts. This internship provides valuable exposure to machine learning, data analysis, and model development in a fast-paced environment. Perfect for those looking to advance their skills in AI and data science.","The AICTE Cloud Virtual Internship offers students the opportunity to gain hands-on experience in cloud computing and virtual environments. During this internship, you’ll work on real-world cloud-based projects, gaining skills in cloud platforms like AWS, Google Cloud, and Microsoft Azure. This program provides valuable insights into cloud infrastructure, deployment, and security, preparing you for a career in the rapidly growing cloud industry."]
    
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = "Navyatha's Resume.pdf";
        link.click(); 
      };
  
    if (!profile) return <h2>Loading...</h2>;
  return (
    <div>
        <Box sx={{marginTop:'80px'}}>
            {/* Home  */}
            <Box sx={{display:'flex',flexDirection: { xs: 'column', md: 'row' },padding: { xs: '5px', md: '0px' },height:'90vh',justifyContent:'space-between',alignContent:'start'}} id="home">
                {/* Name and Abt */}
            <Box display="flex" flexDirection="column" justifyContent="center" alignContent="center" width={{ xs: '100vw', md: '50vw' }} padding={{xs:'0px',md:'40px'}}>
            <Typography variant="h4"  sx={{background: '#2DAA9E',backgroundClip: 'text',textFillColor: 'transparent',display: 'inline'}}>{profile.name}</Typography>
            <Typography variant="body1" color="initial" >{profile.email} || +91 {profile.phone} || <a href={profile.linkedin} style={{colour:"black",textDecoration:'none'}} target='new'>LinkedIn</a> </Typography>
            <Box width={{xs:'80%',md:'80%'}} sx={{background:'linear-gradient(45deg, #6a5acd, #2daaa7)',height:'4px',marginTop:'12px'}}></Box>
            <Typography variant="body1" color="black" sx={{textWrap:'wrap'}} width={{xs:'80vw',md:'40vw'}} display="flex" flexWrap="wrap" paddingTop="12px">{abt}</Typography>
            <br /> 
              <Button variant="outlined" color="primary" sx={{width:'25%'}} download={plant} endIcon={<DownloadIcon/>} onClick={handleDownload}>
              Resume
            </Button>
            </Box>
            {/* Image */}
            <Box display="flex" flexDirection="column" justifyContent="center" alignContent="start"padding="25px" width={{xs:'50vw',md:'25vw'}}>
            <img src={plant}  style={{borderRadius:'25px',border:'1px solid white',boxShadow: '10px 10px 8px rgba(128, 203, 196, 2)'}}/>
            </Box>
            </Box>

            {/* Eduactional */}
            <Box id="Educational" display="flex" flexDirection="column" sx={{height:'90vh',justifyContent:'',alignContent:'',backgroundColor:'#B4EBE6',borderRadius:'25px',padding:'25px'}}>
                <Typography variant="h1" color="#2DAA9E">Education</Typography>
                <hr style={{height:'10px', backgroundColor:'#66D2CE'}}/>  
                <Box sx={{display:'flex',justifyContent:'space-around',alignItems:'center',height:'80vh',flexWrap:'wrap'}} flexDirection={{xs:'column',md:'row'}}>
                    <Box sx={{backgroundColor:'#66D2CE', border:'1px ',padding:'15px',borderRadius:'10px',boxShadow:'10px 10px 8px rgba(0, 135, 158,0.8)',}}>
                        <Box display="flex" justifyContent="space-between">
                        <Typography variant="h5" color="#2DAA9E" fontWeight="bold">B.Tech</Typography>
                        <Typography variant="h6" color="#27445D" >2022-2026</Typography>
                        </Box>
                        <hr/>
                    <Typography variant="body1" color="#27445D" fontWeight="500">College:Sasi Institute of Technology and Engineering </Typography>
                    <Typography variant="body1" color="#27445D">Branch: CSE </Typography>
                    <Typography variant="body1" color="#27445D">CGPA: 7.85 </Typography>
                    </Box>
                    <Box sx={{backgroundColor:'#66D2CE',border:'1px ',padding:'15px',borderRadius:'10px',boxShadow:'10px 10px 8px rgba(0, 135, 158,0.8)'}} width={{xs:'90%',md:'350px'}}>
                        <Box display="flex" justifyContent="space-between">
                        <Typography variant="h5" color="#2DAA9E" fontWeight="bold">Intermediate</Typography>
                        <Typography variant="h6" color="#27445D">2020-2022</Typography>
                        </Box>
                        <hr/>
                    <Typography variant="body1" color="#27445D" fontWeight="500">College: Tirumala Mahila Junior Kalasala </Typography>
                    <Typography variant="body1" color="#27445D">Branch: MPC </Typography>
                    <Typography variant="body1" color="#27445D">CGPA: 7.6 </Typography>
                    </Box>
                    <Box sx={{backgroundColor:'#66D2CE',border:'1px',padding:'15px',borderRadius:'10px',boxShadow:'10px 10px 8px rgba(0, 135, 158,0.8)'}} width={{xs:'90%',md:"350px"}}>
                        <Box display="flex" justifyContent="space-between">
                        <Typography variant="h5" color="#2DAA9E" fontWeight="bold">10<sup>th</sup></Typography>
                        <Typography variant="h6" color="#27445D">2029-2020</Typography>
                        </Box>
                        <hr/>
                    <Typography variant="body1" color="#27445D">School: Sasi English Medium School </Typography>
                    <Typography variant="body1" color="#27445D">Branch: SSC </Typography>
                    <Typography variant="body1" color="#27445D">CGPA: 8.8 </Typography>
                    </Box>
                </Box>
            </Box>
    <br />
            {/* Skills */}
            <Box id="skills" marginTop={{xs:"50px"}} height="90vh" display="flex" sx={{justifyContent:'center',backgroundColor:'#EABDE6',flexDirection:'column',borderRadius:"25px "}} borderRadius="25px">
                <Box bgcolor="#EABDE6" display="flex" flexDirection="column" justifyContent="center"  alignItems="start" padding="15px" >
                    <Box>
                <Typography variant="h1" color="#AA60C8">Skills</Typography>
                    </Box>
                <hr style={{height:'10px',backgroundColor:'#AA60C4',borderRadius:'25px', border:'1px',width:'100%'}}/>
                    <Box display="flex" width="100%" justifyContent="center" alignItems="center">
                <Box display="flex" flexWrap="wrap" gap={{xs:"10px",md:"30px"}}  justifyContent='space-around' alignItems="center" maxWidth={{md:"60vw"}}>
                    {profile.skills.map((e,idx)=>
                <Box sx={{border:'1px ',padding:'25px',margin:'10px',backgroundColor:'#D69ADE',borderRadius:'10px',boxShadow:'10px 10px 8px rgba(75, 22, 76, 0.8)'}}>
                <Typography variant="h5" color="#4B164C" >{e}</Typography>
                </Box>
                )}
                </Box>
                </Box>
                </Box>
            </Box>
<br />

            {/* internships */}
            <Box height={{md:'90vh'}} marginTop={{xs:"50px "}} id="Internships" bgcolor="#48CFCB" borderRadius="25px" padding={{xs:"10px",md:"15px"}}>
                <Box>
                    <Typography variant="h1" color="#071952">Internships</Typography>
                </Box>
                <hr style={{height:'10px',backgroundColor:'#071952  ',borderRadius:'25px', border:'1px',width:'100%'}}/>
                <Box display="flex" flexDirection={{xs:'column',md:'row'}} gap="20px" justifyContent="space-around" alignItems="center" height={{md:'60vh'}}>
                    {profile.internships.map((e,idx)=><Box border="1px" bgcolor="#009FBD" borderRadius="15px" padding="15px">
                    <Typography variant="h5" color="#201E43">{e}</Typography>
                    <hr style={{height:'5px',backgroundColor:'#201E43',border:'1px'}}/>
                    <Typography variant="body1" color="#201E43" flexWrap>{interships[idx]}</Typography>
                    </Box>)}
                </Box>
            </Box>

        </Box>
    </div>
  )
}

export default MainPage