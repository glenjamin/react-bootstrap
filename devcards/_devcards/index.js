import React from 'react';
import ReactDOM from 'react-dom';
import CommonMark from 'commonmark';
import CommonMarkReactRenderer from 'commonmark-react-renderer';

const DEVCARDS_DIV_ID = '__devcards-root';

const parser = new CommonMark.Parser();
const renderer = new CommonMarkReactRenderer();
function markdown2react(md) {
  return renderer.render(parser.parse(md));
}

const DevCard = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    doc: React.PropTypes.string.isRequired,
    body: React.PropTypes.oneOfType([
      React.PropTypes.func,
      React.PropTypes.node,
    ]).isRequired
  },
  cardStyle: {
    border: '1px solid #ddd',
    margin: '10px',
    backgroundColor: '#fff'
  },
  headingStyle: {
    margin: 0,
    padding: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#ddd',
    color: '#666'
  },
  docStyle: {
    backgroundColor: '#fff'
  },
  bodyStyle: {
    padding: '10px',
  },
  render() {
    const { name, doc, body } = this.props;
    return (
      <div style={this.cardStyle}>
        <h3 style={this.headingStyle}>
          {name}
        </h3>
        <div style={this.docStyle}>
          {markdown2react(doc)}
        </div>
        <div style={this.bodyStyle}>
        {typeof body === 'function' ? body() : body}
        </div>
      </div>
    );
  }
});

const DevCards = React.createClass({
  propTypes: {
    catalog: React.PropTypes.object.isRequired
  },
  appStyle: {
    backgroundColor: '#fff',
    margin: '0',
    maxWidth: '600px',
    paddingBottom: '100px'
  },
  headingStyle: {
    margin: 0,
    padding: '20px 10px'
  },
  render() {
    const catalog = this.props.catalog;
    return (
      <div style={this.appStyle}>
        <h1 style={this.headingStyle}>DevCards</h1>
        {Object.keys(catalog).map(module => {
          return (
            <div key={module}>
              <h2>{module}</h2>
              {catalog[module].map(
                (props, i) => <DevCard key={i} {...props} />
              )}
            </div>
          );
        })}
      </div>
    );
  }
});

function getRoot() {
  const root = document.getElementById(DEVCARDS_DIV_ID);
  if (root) return root;

  const newRoot = document.createElement('div');
  newRoot.id = DEVCARDS_DIV_ID;
  document.body.appendChild(newRoot);
  return newRoot;
}

function render(catalog) {
  console.log(catalog);
  const root = getRoot();
  ReactDOM.render(<DevCards catalog={catalog} />, root);
}

export function devcard(name, doc, body) {
  devcard.current.push({ name, doc, body });
}
devcard.off = () => {};

export function run(modules, require) {
  const catalog = {};
  modules.forEach(m => {
    devcard.current = catalog[m] = [];
    require(m);
  });
  render(catalog);
}
