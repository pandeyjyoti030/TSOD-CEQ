import React from "react";
import one from './Users/1.svg'
import two from './Users/2.svg'
import three from './Users/3.svg'
import four from './Users/4.svg'
import five from './Users/5.svg'
import avatar from './Images/Avatar.png'

export const Table = () => {

  return (
    <div>
        <table>

        <tr style={{backgroundColor:"#D9D9DC"}}>
          <th></th>
          <th></th>
          <th></th>
          <th>Designation</th>
          <th>Skills</th>
          <th>Team</th>
          <th>Availability</th>
        </tr>

        <tr>
          <td><input type="checkbox" name="" id="" /></td>
            <td><img src={five} alt="" /></td>
          <td>Albert</td>
          <td>Software Engineer</td>
          <td>App Development</td>
          <td>
            <progress className="progress" value="55" max="100">
            
            </progress>
          </td>
          <td>Power Apps</td>
        </tr>


        <tr>
          <td><input type="checkbox" name="" id="" /></td>
            <td><img src={one} alt="" /></td>
          <td>Alex</td>
          <td>Cloud Security Enginner</td>
          <td>Cyber Security</td>
          <td>
            <progress id="file" value="73" max="100">
           
            </progress>
          </td>
          <td>Finops</td>
        </tr>

        <tr>
          <td><input type="checkbox" name="" id="" /></td>
            <td><img src={two} alt="" /></td>
          <td>Stacy</td>
          <td>Software Egineer</td>
          <td>Observability</td>
          <td>
            <progress id="file" value="32" max="100">
              
            </progress>
          </td>
          <td>RSM</td>
        </tr>

        <tr>
          <td><input type="checkbox" name="" id="" /></td>
            <td><img src={three} alt="" /></td>
          <td>Alfreds</td>
          <td>Software Engineer</td>
          <td>Web Development</td>
          <td>
            <progress className="progress" value="46" max="100">
            
            </progress>
          </td>
          <td>Webinism</td>
        </tr>

        <tr>
          <td><input type="checkbox" name="" id="" /> </td>
            <td><img src={four} alt="" /></td>
          <td>John</td>
          <td>Devops Engineer</td>
          <td>AWS Devops</td>
          <td>
            <progress id="file" value="59" max="100">
           
            </progress>
          </td>
          <td>TU</td>
        </tr>
{/* 
        <tr>
            <td><img src={avatar} alt="" /></td>
          <td>Miley</td>
          <td style={{backgroundColor:"#DCF2E8"}}>Devops Engineer</td>
          <td>Azure Devops</td>
          <td>
            <progress id="file" value="72" max="100">
            
            </progress>
          </td>
          <td style={{backgroundColor:"#DCF2E8"}}>McDonald's</td>
        </tr>

        <tr>
            <td><img src={five} alt="" /></td>
          <td>Becky</td>
          <td>Monitoring Enginner</td>
          <td>Service Now</td>
          <td>
            <progress className="progress" value="32" max="100">
              
            </progress>
          </td>
          <td>Informa</td>
        </tr>

        <tr>
            <td><img src={three} alt="" /></td>
          <td>Ted</td>
          <td style={{backgroundColor:"#DCF2E8"}}>Devops Engineer</td>
          <td>AWS Devops</td>
          <td>
            <progress id="file" value="78" max="100">
              
            </progress>
          </td>
          <td style={{backgroundColor:"#DCF2E8"}}>FinOps</td>
        </tr>

        <tr>
            <td><img src={one} alt="" /></td>
          <td>Joseph</td>
          <td>Software Engineer</td>
          <td>Web Development</td>
          <td>
            <progress className="progress" value="32" max="100">
             
            </progress>
          </td>
          <td>Webinism</td>
        </tr>

        <tr>
            <td><img src={two} alt="" /></td>
          <td>Rachel</td>
          <td style={{backgroundColor:"#DCF2E8"}}>Devops Engineer</td>
          <td>AWS Devops</td>
          <td>
            <progress id="file" value="47" max="100">
              
            </progress>
          </td>
          <td style={{backgroundColor:"#DCF2E8"}}>FinOps</td>
        </tr>

        <tr>
            <td><img src={three} alt="" /></td>
          <td>Jim</td>
          <td>Full Stack Developer</td>
          <td>Dot Net Development</td>
          <td>
            <progress className="progress" value="96" max="100">
              
            </progress>
          </td>
          <td>Webinism</td>
        </tr>
        <tr>
            <td><img src={one} alt="" /></td>
          <td>Luke</td>
          <td>Monitoring Enginner</td>
          <td>New Relic</td>
          <td>
            <progress  className="progress" value="45" max="100">
             
            </progress>
          </td>
          <td>Informa</td>
        </tr>

        <tr>
            <td><img src={two} alt="" /></td>
          <td>Emma</td>
          <td style={{backgroundColor:"#DCF2E8"}}>Devops Engineer</td>
          <td>AWS Devops</td>
          <td>
            <progress id="file" value="69" max="100">
              
            </progress>
          </td>
          <td style={{backgroundColor:"#DCF2E8"}}>FinOps</td>
        </tr>

        <tr>
            <td><img src={three} alt="" /></td>
          <td>Harry</td>
          <td>Software Engineer</td>
          <td>App Development</td>
          <td>
            <progress className="progress" value="32" max="100">
             
            </progress>
          </td>
          <td>Custom Visualization</td>
        </tr>

    <tr>
        <td><img src={four} alt="" /></td>
          <td>Haley</td>
          <td style={{backgroundColor:"#DCF2E8"}}>Monitoring Engineer</td>
          <td>Power Bi</td>
          <td>
            <progress id="file" value="88" max="100">
              
            </progress>
          </td>
          <td style={{backgroundColor:"#DCF2E8"}}>RSM</td>
        </tr> */}


      </table>

    </div>
  );
};
