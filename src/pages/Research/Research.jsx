import './styles.css'

export const Research = () => {
  return (
    <div className='pagecontainer'>
      <h1>A Brief Summary of my Research Experience and Interests:</h1>
      <div className='margin' />
      <h2><span className='color'>Software Engineering and Applied AI:</span></h2>
      <div className='margin' />
      {/* <h3 className='paragraph-tab'>Computer Science and Programming have been amongst my passions since my childhood. I am fortunate to be able to pursue this field as an adult and I am always eager to expand my horizons by learning new methods, technologies, and concepts.</h3> */}
      <h3></h3>
      <h3 className='paragraph-tab'>One of the research areas in Software Engineering that I am currently studying is the processes and tools revolving around <span className='color'>the Development Workflow</span>. During the last two years of my bachelor's degree, I worked part time as a programmer and then as a technical product manager in the industry. This experience taught me that the Software Engineering process gets more complicated by day (CI/CD, code review, testing, new technologies, frameworks and etc), and therefore, creating tools that assist developers in their workflow can be really helpful. The introduction of AI Assistants and LLMs in recent years brings so many possibilities in researching ways to enable software engineers to create faster and higher quality code.</h3>
      <div className='margin' />
      <h2 className='paragraph-tab'><span className='color'>Some of my favorite papers in this field:</span></h2>
      <ul className='list-tab'>
        <li>
        Nassif, M., & Robillard, M. P. (n.d.). IEEE TRANSACTIONS ON SOFTWARE ENGINEERING 1 <span className='bold'>Identifying Concepts in Software Projects.</span> https://doi.org/10.5281/zenodo.6459607
        </li>
        <li>
        Wu, Yixi & He, Pengfei & Wang, Zehao & Wang, Shaowei & Tian, Yuan & Tse-Hsun, & Chen,. (2024). <span className='bold'>AutoAPIEval: A Framework for Automated Evaluation of LLMs in API-Oriented Code Generation.</span> 10.48550/arXiv.2409.15228. 
        </li>
        <li>
        Li, H., Bezemer, C.-P., & Hassan, A. E. (2024). <span className='bold'>Software Engineering and Foundation Models: Insights from Industry Blogs Using a Jury of Foundation Models.</span> http://arxiv.org/abs/2410.09012
        </li>
        <li>
        Ahmed, S. S., Wang, S., Tian, Y., Tse-Hsun, Chen, & Zhang, H. (2024). <span className='bold'>Studying and Recommending Information Highlighting in Stack Overflow Answers.</span> http://arxiv.org/abs/2401.01472
        </li>
        <li>
        de Souza, C. R. B., Rodriguez-Perez, G., Basha, M., Yoon, D., & Beschastnikh, I. (2024). <span className='bold'>The Fine Balance Between Helping With Your Job And Taking It: AI Code Assistants Come To The Fore.</span> IEEE Software. https://doi.org/10.1109/MS.2024.3357787
        </li>
        <li>
        Balreet Grewal, Wentao Lu, Sarah Nadi, and Cor-Paul Bezemer. 2024. <span className='bold'>Analyzing Developer Use of ChatGPT Generated Code in Open Source GitHub Projects.</span> In Proceedings of the 21st International Conference on Mining Software Repositories (MSR '24). Association for Computing Machinery, New York, NY, USA, 157–161. https://doi.org/10.1145/3643991.3645072
        </li>
      </ul>
      <div className='margin' />
      <h2 className='paragraph-tab color'>Some other areas related to Software Engineering that I am interested in are:</h2>
      <ul className='list-tab'>
        <li className='bold'>
        Game Development
        </li>
        <li className='bold'>
        Machine Learning (See One of my Projects <a href='https://github.com/KianoshArian/nn-animal-classification' target='_blank'>here</a>)
        </li>
        <li className='bold'>
        Personalization, A/B Testing and Recommendation Systems
        </li>
        <li className='bold'>
        AI and CS in Social Science
        </li>
        <li className='bold'>
        HCI 
        </li>
      </ul>
      
      <div className='margin' />  
      <h3 className='paragraph-tab'>My Bachelor's Thesis "An Eye Tracking Study on the Effect of Short-Form Videos (SFVs) on Student Attention" is now <span className='color'>accepted by the IST 2024 conference and will soon be published and indexed by IEEE</span>. In this paper, I perform data analysis on eye tracking data from students before and after watching SFVs (short form videos eg. TikToks) to find out what effect does watching SFVs have on their cognition and eye metrics such as pupil diameter, fixation count and fixation duration. You can contact me via email if you are interested in having an early look into this paper.</h3>
      <h3 className='paragraph-tab'>I have also studied other topics such as User Modeling, Agent Based Simulation, under the guidance of my supervisor.</h3>
      <div className='margin' />
      <h3 className='paragraph-tab'>Overall, my goal is to pursue research in Computer Science and Software Engineering to help solve challenges in different industries, and do research that contribute to global advancement. I am also open to collaboration on any new cool ideas!</h3>
      <div className='margin' />
    </div>
  );
}
