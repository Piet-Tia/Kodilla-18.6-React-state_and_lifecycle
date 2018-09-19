const Counter1 = React.createClass({
	getInitialState: function () {
		return {
			counter: 0
		};
	},

	increment: function () {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function () {
		return React.createElement('div',{},
			React.createElement('button', { onClick: this.decrement }, '-'),
			React.createElement('span', {}, ' Licznik 1: ' + this.state.counter + ' '),
			React.createElement('button', { onClick: this.increment }, '+'),
		);
	}
});

const Counter2 = React.createClass({
	getInitialState: function () {
		return {
			counter: 0
		};
	},

	increment: function () {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function () {
		return React.createElement('div',{},
			React.createElement('button', { onClick: this.decrement }, '-'),
			React.createElement('span', {}, ' Licznik 2: ' + this.state.counter + ' '),
			React.createElement('button', { onClick: this.increment }, '+'),
		);
	}
});


//const app1 = React.createElement(Counter1);
//const app2 = React.createElement(Counter2);

const App = React.createClass({
	render: function(){
		return React.createElement('div',{}, 
			React.createElement(Counter1),
			React.createElement(Counter2),
		)
	}
});

const app = React.createElement(App);

ReactDOM.render(app, document.getElementById('app'));