import React from 'react'

const Popularity = (props)=> {

    const questions = props.allQuestions;


    const freq = (questions)=> 
    {

        const [ques, freq] = [[], []];
        let prev;

        questions.sort();
        for(let i = 0; i < questions.length; i++){
            if(questions[i] !== prev){
                ques.push(questions[i]);
                freq.push(1);
            } else {
                freq[i - 1]++;
            }

            prev = questions[i];
        }

        return [ques, freq];

    }


    const freqSet = freq(questions);
    const results = [];
    const sortFreq = (result)=> {
      for (let i = 0; i < result[0].length; i++) {
        results.push([result[0][i], result[1][i]]);
      }
    }

    const sortByFreq = (a, b)=> {
      if (a[1] === b[1]) {
        return 0;
      } else {
        return a[1] < b[1] ? -1 : 1;
      }
    }
    sortFreq(freqSet);
    results.reverse();
    results.sort(sortByFreq);
    results.reverse();

    const gotoHome = _=> {
        //Reset to initials
        props.setAnswerView(false);
        props.setShowPopularity(false);
        props.setQuestion('');
        props.setAnswers([]);
    }

    console.log(props.allQuestions);

console.log(results);
    


    return (
        <div className="question-popularity">
            <h1>Top Asked Questions</h1>
            <div className="btn-table-wrapper">
                <div className="top-btn-container">
                    <button className="btn-sm" onClick={gotoHome}>GO HOME</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Questions</th>
                            <th>Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            results.map((res, idx) => (
                                <tr key={idx}>
                                    <td>{res[0]}</td>
                                    <td>{res[1]}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>


            
        </div>
    )
}

export default Popularity
