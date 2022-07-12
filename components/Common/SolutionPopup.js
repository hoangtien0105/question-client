import { UpSquareOutlined } from '@ant-design/icons';
import { BackTop, Modal } from 'antd';
import { useAnswerByQuestionId } from 'lib/hook'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import SolutionSection from './SolutionSection';


export default function SolutionPopup({questionId, onClose}) {
    
    const {data, error} = useAnswerByQuestionId(questionId);
    
    return <Modal footer={null} width={"90%"} visible={true} onCancel={onClose} >
        
    
        
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            
            <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Solution
                </h3>
                
            </div>
            
            <div className="p-1 md:p-6 space-y-6">
               {data ? <SolutionSection answers={data.answer}/> : <div style={{width: '100%', height: '20vh'}}></div>}
            </div>
            
            
        </div>
    
    </Modal>;
}
