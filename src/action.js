#!/usr/bin/env node

const { program } = require('commander');

program.name('CLI Github Activity')
    .description('CLI Program to get user activity in Github')
    .version('1.0.0')
    .argument('<username>', 'Username')
    .action( async (username) => {
       try {
        const response = await fetch(`https://api.github.com/users/${username}/events`);    
        if( response.status == 200) {
            userActivity = await response.json();
            userActivity.map( (elt) => {
                console.log(`Pushed 3 commits to ${elt.repo.name}`);
            })
        } else {
            console.log('Wrong status: ', response.status)
        }
       } catch( error ) {
        console.log('New Error: ', error.message)
       }

    });
program.parse(process.argv);