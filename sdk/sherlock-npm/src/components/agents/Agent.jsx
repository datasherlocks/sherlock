import React, { useMemo, useRef, useState, Fragment, useContext } from "react";
import * as Form from '@radix-ui/react-form';
import ErrorBoundary from "../../common/ErrorBoundary";
import Question from "../ui/question/question";
import Search from "../ui/search/search";
import {ThemeContext} from "../../context/ThemeContext";
import {Flex, Text, Button} from '@radix-ui/themes';


AbortSignal.timeout ??= function timeout(ms) {
    const ctrl = new AbortController();
    setTimeout(() => ctrl.abort(), ms);
    return ctrl.signal;
};

const propNames = {
    agentUrl: "agent_url",
    api_key: "api_key"
};

export default function Agent({agentUrl, apiKey}) {
    const {theme} = useContext(ThemeContext);

    const [question,
        setQuestion] = React.useState('');
    const [responseData,
        setResponseData] = React.useState([]);
    const [searchData,
        setSearchData] = React.useState([]);
    const [meta,
        setMeta] = React.useState({});
    const [showList,
        setShowList] = React.useState(false);
    const [showAnimation,
        setShowAnimation] = React.useState(false);

    const handleQuestionChange = (e) => {
        console.log(e)
        setQuestion(e.target.value);
    };

    return (
        <div>
            <Form.Root className="w-full" >
                <div
                    className="flex gap-4 rounded border p-4 transition-colors dark:border-black-400">
                    <div className="flex content-center space-x-3 w-full">
                        <Question
                            theme={theme}
                            handleQuestionChange={handleQuestionChange}
                            Question={question}></Question>
                    </div>
                </div>
                <Search
                    theme={theme}
                    searchData={searchData}
                    showList={showList}
                    onClick={(e) => {
                    setQuestion(result.question);
                    setSql(result.query);
                    setSearchData([]);
                    setShowList(false);
                }}></Search>
                <div className="rounded border p-4 transition-colors dark:border-black-400">
                    <span>
                        <Button variant="classic">Ask</Button>
                    </span>
                </div>
            </Form.Root>
        </div>
    )
}