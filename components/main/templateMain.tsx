import React from 'react'
import TempIntro from '../tempIntro'
import Choose from '../home/Choose'
import Templates from '../Template'
import FAQ from '../FAQ'
import Question from '../Question'


const TemplateMain = () => {
    return (
        <div>
            <TempIntro />
            <Choose />
            <Templates />
            <FAQ />
            <Question />
        </div>
    )
}

export default TemplateMain
