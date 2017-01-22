//var express = require('express')
const publicIp = require('public-ip');
const exec = require('child_process').exec;

var ipv6s = [
	"list",
	"biglist"
];


publicIp.v6().then(ip => {
    exec('ip -6 addr del ' + ip + '/64 dev eth0', (error, stdout, stderr) => {
		});
		var count = Math.floor(Math.random() * ipv6s.length) + 1;
		if(count == ipv6s.length) {
			count = 0;
		}
		else {
			count++;
		}
		exec('ip -6 addr add ' + ipv6s[count] + '/64 dev eth0', (error, stdout, stderr) => {
		});
});

publicIp.v6().then(ip => {
    console.log("New IP " + ip);
});
