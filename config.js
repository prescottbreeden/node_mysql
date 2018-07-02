// normally .gitignore this file


var config = {
    development: {
        //url to be used in link generation
        url: 'http://my.site.com',
        // mysql connection settings
        database: {
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'joinusDB'
        },
        // server details
        server: {
            host: '10.0.0.170',
            port: '4200'
        },
        // session settings
        session: {
            secret: "rubberbabybuggybumpers",
            name: 'cookie_monster',
            proxy: true,
            resave: true,
            saveUninitialized: true
        }
    },
    production: {
        //url to be used in link generation
        url: 'http://my.site.com',
        // mysql connection settings
        database: {
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'joinusDB'
        },
        // server details
        server: {
            host: '10.0.0.170',
            port: '4200'
        },
        // session settings
        session: {
            secret: "rubberbabybuggybumpers",
            name: 'cookie_monster',
            proxy: true,
            resave: true,
            saveUninitialized: true
        }
    }
};
module.exports = config;