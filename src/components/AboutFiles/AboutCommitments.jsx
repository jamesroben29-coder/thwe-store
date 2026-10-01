
import { Sparkles, Recycle ,RotateCw, Crosshair} from "lucide-react";
import "./AboutDatas.css";

const AboutCommitments = () => {

  return (
    <div className='about-commitments-container'>
        <h3>WHAT WE STAND FOR</h3>
        <h2>Our Four Commitments</h2>

        <div className="about-commitments-list">
            <div className="about-commitments-card">
                <Sparkles className="commit-icon"/>
                <h4>Radical Curation</h4>
                <p> Less than 3% of products we evaluate make it onto Maison. 
                    We test every item ourselves against a strict set of 
                    criteria covering materials, durability, and design integrity.
                </p>
            </div>
            <div className="about-commitments-card">
                <Recycle className="commit-icon"/>
                <h4>Responsible Sourcing</h4>
                <p> We work directly with manufacturers who hold fair labour 
                    certifications and prioritize sustainable materials — recycled, 
                    organic, or responsibly harvested.
                </p>
            </div>
            <div className="about-commitments-card">
                <RotateCw className="commit-icon"/>
                <h4>30-Day Returns</h4>
                <p> If it doesn't live up to what we promised, send it back 
                    within 30 days for a full refund. No questions. 
                    No restocking fees.
                </p>
            </div>
            <div className="about-commitments-card">
                <Crosshair className="commit-icon"/>
                <h4>Transparent Pricing</h4>
                <p> We tell you what things cost to make and why we price 
                    them the way we do. No artificial inflation, no 
                    manufactured discounts.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutCommitments;