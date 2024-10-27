import './styles.css'
import CV from "../../assets/KianoshArian.pdf"

export const Home = () => {
  return (
    <div className='pageContainer'>
      <h1>Hi!</h1>
      <div className='margin' />
      <h2><span className="big">I am <span className='color'>Kianosh Arian</span>.</span> I am a researcher interested in <span className='color'>Software Engineering, Human-Computer Interaction (HCI) and Applications of AI</span>. I finished my Bachelor's in Computer Science in July 2024 in the University of Tehran and continue to work there as a <span className='color'>research assistant in the TELAB</span>.</h2>      <h2>I am proud to be also working as a <span className='color'>Programmer and Technical Product Manager</span> at <a href="https://teamyab.com/" target="_blank">Teamyab</a>, where we research the industry needs and develop tools using the latest technologies to enhance processes within the HR industry.</h2>
      <div className='margin' />
      <h2>Currently, <span className='color'>I am looking for graduate positions</span> to continue my research in the fields of Software Engineering, HCI and Applied AI. For more details on my research interests and goals, please visit the <a href="/Research">Research section</a>.</h2>      <h2>You can find the complete details on my research and work experience in <a href = {CV}>my CV.</a></h2>
    </div>
  );
}
