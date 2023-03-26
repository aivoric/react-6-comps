import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from "../components/Button";

function ButtonPage() {
    return (
        <div>
            <div>
                <Button primary className="mb-10">
                    <GoBell />
                    Button 1
                </Button>
            </div>
            <div>
                <Button secondary rounded outline>
                    <GoCloudDownload />
                    Button 2
                </Button>    
            </div>
            <div>
                <Button success outline>
                    <GoDatabase />
                    Button 3
                </Button>    
            </div>
            <div>
                <Button warning rounded>
                    Button 4
                </Button>    
            </div>
            <div>
                <Button danger outline>
                    Button 5
                </Button>    
            </div>
        </div>
    );
}

export default ButtonPage;