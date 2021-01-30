[0;1;31m●[0m mongod.service - MongoDB Database Server
     Loaded: loaded (/lib/systemd/system/mongod.service; enabled; vendor preset: enabled)
     Active: [0;1;31mfailed[0m (Result: signal) since Sun 2021-01-24 17:19:13 MSK; 5min ago
       Docs: https://docs.mongodb.org/manual
    Process: 64799 ExecStart=/usr/bin/mongod --config /etc/mongod.conf [0;1;31m(code=killed, signal=KILL)[0m
   Main PID: 64799 (code=killed, signal=KILL)

Jan 22 17:14:35 ruvds-tn4zd systemd[1]: [0;1;39m[0;1;31m[0;1;39m/lib/systemd/system/mongod.service:12: PIDFile= references a path below legacy directory /var/run/, updating /var/run/mongodb/mongod.pid → /run/mongodb/mongod.pid; please update the unit file accordingly.[0m
Jan 22 17:14:36 ruvds-tn4zd systemd[1]: [0;1;39m[0;1;31m[0;1;39m/lib/systemd/system/mongod.service:12: PIDFile= references a path below legacy directory /var/run/, updating /var/run/mongodb/mongod.pid → /run/mongodb/mongod.pid; please update the unit file accordingly.[0m
Jan 22 17:14:39 ruvds-tn4zd systemd[1]: [0;1;39m[0;1;31m[0;1;39m/lib/systemd/system/mongod.service:12: PIDFile= references a path below legacy directory /var/run/, updating /var/run/mongodb/mongod.pid → /run/mongodb/mongod.pid; please update the unit file accordingly.[0m
Jan 22 17:16:32 ruvds-tn4zd systemd[1]: [0;1;39m[0;1;31m[0;1;39m/lib/systemd/system/mongod.service:12: PIDFile= references a path below legacy directory /var/run/, updating /var/run/mongodb/mongod.pid → /run/mongodb/mongod.pid; please update the unit file accordingly.[0m
Jan 22 17:16:35 ruvds-tn4zd systemd[1]: [0;1;39m[0;1;31m[0;1;39m/lib/systemd/system/mongod.service:12: PIDFile= references a path below legacy directory /var/run/, updating /var/run/mongodb/mongod.pid → /run/mongodb/mongod.pid; please update the unit file accordingly.[0m
Jan 22 17:16:35 ruvds-tn4zd systemd[1]: [0;1;39m[0;1;31m[0;1;39m/lib/systemd/system/mongod.service:12: PIDFile= references a path below legacy directory /var/run/, updating /var/run/mongodb/mongod.pid → /run/mongodb/mongod.pid; please update the unit file accordingly.[0m
Jan 22 17:16:36 ruvds-tn4zd systemd[1]: [0;1;39m[0;1;31m[0;1;39m/lib/systemd/system/mongod.service:12: PIDFile= references a path below legacy directory /var/run/, updating /var/run/mongodb/mongod.pid → /run/mongodb/mongod.pid; please update the unit file accordingly.[0m
Jan 22 17:17:04 ruvds-tn4zd systemd[1]: [0;1;39m[0;1;31m[0;1;39m/lib/systemd/system/mongod.service:12: PIDFile= references a path below legacy directory /var/run/, updating /var/run/mongodb/mongod.pid → /run/mongodb/mongod.pid; please update the unit file accordingly.[0m
Jan 24 17:19:13 ruvds-tn4zd systemd[1]: [0;1;38;5;185m[0;1;39m[0;1;38;5;185mmongod.service: Main process exited, code=killed, status=9/KILL[0m
Jan 24 17:19:13 ruvds-tn4zd systemd[1]: [0;1;38;5;185m[0;1;39m[0;1;38;5;185mmongod.service: Failed with result 'signal'.[0m
