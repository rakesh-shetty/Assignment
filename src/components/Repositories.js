import React from 'react'
import { connect } from 'react-redux'
import { getReposByUserID, sortByDate } from '../redux/selectors/repos.selector'
import Search from './Search'
import { formatDistance } from 'date-fns';
import { AiOutlineStar } from 'react-icons/ai';
import { GoRepoForked } from 'react-icons/go';
import { FaBalanceScale } from 'react-icons/fa';

class Repositories extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            displayRepos: this.props.repos
        }
    }

    handleSearch = (e) => {

        let filteredDisplayed = this.props.repos.filter(repo => repo.name.toLowerCase()?.includes(e.target.value.toLowerCase()))
        this.setState({
            displayRepos: filteredDisplayed
        })
    }

    render() {

        let { displayRepos } = this.state
        if (displayRepos.length === 0)
            displayRepos = this.props.repos

        return (
            <div className="ml-1">
                <div >
                    <Search handleSearch={this.handleSearch} />
                </div>
                <hr />
                {
                    displayRepos.map(repo => {
                        return (
                            <React.Fragment key={repo.id}>
                                <div className="row">
                                    <h5 className="col-8"><a href="/">{repo.name}</a></h5>
                                    <button className="offset-3 col-1 btn star-btn"><AiOutlineStar />Star</button>
                                </div>

                                <p className="mr-2">{repo.description}</p>
                                <div className="repos-sub-menus">
                                    {repo.language && <><span className={`repo-language-color ml-1 mt-1 ${repo.language}`}></span>&nbsp;<p className="mr-3">{repo.language}</p></>}
                                    {repo.stargazers_count > 0 && <p className="mr-3 link"><AiOutlineStar /> {repo.stargazers_count}</p>}
                                    {repo.forks_count > 0 && <p className="mr-3 link"><GoRepoForked /> {repo.forks_count}</p>}
                                    {repo.license && <p className="mr-3 link"><FaBalanceScale /> {repo.license.name}</p>}
                                    <p className="mr-3 muted-text">Updated {formatDistance(new Date(repo.updated_at), new Date())} Ago</p>
                                </div>
                                <hr />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        repos: getReposByUserID(state.repos, state.user.id).sort(sortByDate)
    }
}

export default connect(mapStateToProps)(Repositories)




{/* <select className="col-sm-2 repo-filters" id="cars" name="cars" value={this.state.type} onChange={this.handleChange}>
                        <option value="all">All</option>
                        <option value="sources">Sources</option>
                        <option value="sorks">Forks</option>
                        <option value="archived">Archived</option>
                        <option value="mirrors">Mirrors</option>
                    </select>

                    <select className="col-sm-2 repo-filters" id="cars" name="cars" value={this.state.language} onChange={this.handleChange}>
                        <option value="all">All</option>
                    </select> */}