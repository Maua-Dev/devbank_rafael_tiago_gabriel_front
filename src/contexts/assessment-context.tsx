import { createContext, useState, ReactNode } from "react"

type AssessmentContextType = {
    assessment : number,
    setAssessment: React.Dispatch<React.SetStateAction<number>>
}

const defaultAssessmentContext : AssessmentContextType = {
    assessment: 0,
    setAssessment: () => { }
}

export const AssessmentContext = createContext<AssessmentContextType>(defaultAssessmentContext);

export const AssessmentProvider = ({ children }: { children: ReactNode }) => {
    const [assessment, setAssessment] = useState(0);

    return (
        <AssessmentContext.Provider value = {{ assessment, setAssessment }}>
            { children }
        </AssessmentContext.Provider>
    );
};