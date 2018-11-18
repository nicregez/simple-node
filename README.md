simple-node
===========

Push and Scale
--------------

    $ cf push simple-node -c "node index.js" -m 128mb --random-route
    $ cf scale simple-node -i 2
    $ cf apps
    $ cf app simple-node

Use
___

Put the randomly generated route into variable URL for ease of use

    $ URL=...
    $ curl http://${URL}/ -s | jq "."

Health: recovery
----------------

Watch the logs while you kill an instance

    $ cf logs simple-node

Kill one instance

    $ curl http://${URL}/kill

Health: availability
--------------------

Observe the index of the application instance which serves the request

    $ watch -n 1 -c "curl http://${URL}/ -s | jq \".\""

Kill one instance and keep observing the instance index above

    $ curl http://${URL}/kill

Clean up
--------

Delete the application

    $ cf delete simple-node -f

