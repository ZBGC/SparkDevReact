import Teer1 from "../Images/gameplay/G1.png";
import Teer2 from "../Images/gameplay/G2.png";
import Teer3 from "../Images/gameplay/G3.png";
import Teer4 from "../Images/gameplay/G4.png";
import Teer5 from "../Images/gameplay/G5.png";
import Teer6 from "../Images/gameplay/G6.png";
import Teer7 from "../Images/gameplay/G7.png";
import Teer8 from "../Images/gameplay/G8.png";


export default function gallery(){

    return(
        <div class=" rounded overflow-hidden shadow-lg hover:shadow-2xl p-20 scroll-touch" id="aComp">
            <div class="px-6 py-4">
                <div class="flex overflow-x-auto py-4 px-6 space-x-8 rounded hide-scroll-bar">
                <div class="flex-shrink-0 border-8 rounded"><img src={Teer2} class="h-96 w-96 object-cover rounded"></img></div>
                <div class="flex-shrink-0 border-8 rounded"><img src={Teer3} class="h-96 w-96 object-cover rounded"></img></div>
                <div class="flex-shrink-0 border-8 rounded"><img src={Teer4} class="h-96 w-96 object-cover rounded"></img></div>
                <div class="flex-shrink-0 border-8 rounded"><img src={Teer5} class="h-96 w-96 object-cover rounded"></img></div>
                <div class="flex-shrink-0 border-8 rounded"><img src={Teer6} class="h-96 w-96 object-cover rounded"></img></div>
                <div class="flex-shrink-0 border-8 rounded"><img src={Teer7} class="h-96 w-96 object-cover rounded"></img></div>
                <div class="flex-shrink-0 border-8 rounded"><img src={Teer8} class="h-96 w-96 object-cover rounded"></img></div>
                <div class="flex-shrink-0 border-8 rounded"><img src={Teer1} class="h-96 w-96 object-cover rounded"></img></div>
            </div>
        </div>

        </div>
    );
}