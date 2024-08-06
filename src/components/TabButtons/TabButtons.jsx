import TabButton from "../TabButton/TabButton";
import Section from "../Section/Section.jsx";
import Tabs from "../Tabs/Tabs.jsx";

import { useState, Fragment } from 'react';

import { EXAMPLES } from '../../data.js';

export default function TabButtons() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        //selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton)
    }

    let tabContent = <p>Please select a topic</p>;

    if (selectedTopic) {
        tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>

        </div>
    }

    return (
        <Section title="Dynimac Block" id="examples">
                <Tabs ButtonsContainer="div" buttons={<menu>
                    <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
                </menu>}>
                    {tabContent}
                </Tabs>

        </Section>


    )
}