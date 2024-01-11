import { useEffect, useState } from 'react';
import * as React from 'react';
import * as Form from '@radix-ui/react-form';

export default function Question({theme, handleQuestionChange, Question}) {
    return (
        <Form.Field className="grid mb-[10px]" name="question">
            <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                    Question
                </Form.Label>
                <Form.Message
                    className="text-[13px] text-black opacity-[0.8]"
                    match="valueMissing">
                    Please enter a question
                </Form.Message>
            </div>
            <Form.Control asChild>
                <textarea
                    className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none w-full"
                    required
                    value={Question}
                    onChange={handleQuestionChange}/>
            </Form.Control>
        </Form.Field>
    )
}