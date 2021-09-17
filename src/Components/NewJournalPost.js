import React from 'react'
import {useParams} from 'react-router-dom'

function NewJournalPost() {
    const params = useParams()


    function handleSubmit() {

    }

    return (
        
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui orange header">
                        <div className="content">
                            New journal post
                        </div>
                    </h2>
                    <form className="ui large form" onSubmit={handleSubmit}>
                        <div className="ui stacked segment">
                            <div className="field">
                                <input type="text" name="post-name" placeholder="Post Title (Optional)"/>
                            </div>
                            <div className="field">
                                <textarea placeholder="Content" rows="2"/>
                            </div>
                            <div className="ui fluid large orange submit button">Post</div>
                        </div>

                        <div className="ui error message">test</div>

                    </form>
                </div>
            </div>
        
    )
}

export default NewJournalPost
