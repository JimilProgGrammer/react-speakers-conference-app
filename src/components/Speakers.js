import { SpeakerFilterProvider } from "../contexts/SpeakerFilterContext";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar"

function Speakers() {
    return (
        <SpeakerFilterProvider startingShowSessions={false}>
            <SpeakersToolbar />
            <SpeakersList />
        </SpeakerFilterProvider>
    );
}
export default Speakers;