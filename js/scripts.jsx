

function Home(props) {
    return(
        <div>
            <h1>This is the home page of {props.route.name}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
        </div>
    )
}


function Contact(props) {
    return (
        <div>
            <h2>GOT QUESTIONS?</h2>
            <p>The easiest thing to do is post on
                our <a href="http://google.com">forums</a>.
            </p>
        </div>
    );
}

function Stuff(props) {
    return (
        <div>
            <h2>STUFF</h2>
            <p>Mauris sem velit, vehicula eget sodales vitae,
                rhoncus eget sapien:</p>
            <ol>
                <li>Nulla pulvinar diam</li>
                <li>Facilisis bibendum</li>
                <li>Vestibulum vulputate</li>
                <li>Eget erat</li>
                <li>Id porttitor</li>
            </ol>
        </div>
    );
}


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><ReactRouter.IndexLink to="/" activeClassName="active">Home</ReactRouter.IndexLink></li>
                    <li><ReactRouter.Link to="/stuff" activeClassName="active">Stuff</ReactRouter.Link></li>
                    <li><ReactRouter.Link to="/contact" activeClassName="active">Contact</ReactRouter.Link></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <ReactRouter.Router>
        <ReactRouter.Route path="/" component={App}>
            <ReactRouter.IndexRoute component={Home} name="Drew Parker"/>
            <ReactRouter.Route path="stuff" component={Stuff} />
            <ReactRouter.Route path="contact" component={Contact} />
        </ReactRouter.Route>
    </ReactRouter.Router>,
    document.getElementById('container')
)
