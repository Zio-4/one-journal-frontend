import React from 'react'

function NewJournal() {
    return (
        <form>
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui orange header">
                        <div className="content">
                            New journal
                        </div>
                    </h2>
                    <form className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                                <input type="text" name="journal-name" placeholder="Journal Name"/>
                            </div>
                            <div className="field">
                                <textarea placeholder="description" rows="2"/>
                            </div>
                            <div className="ui fluid large orange submit button">Create</div>
                        </div>

                        <div className="ui error message">test</div>

                    </form>
                </div>
            </div>
        </form>
    )
}

export default NewJournal
