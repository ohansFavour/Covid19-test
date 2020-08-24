<?php

    // required headers
    header("Access-Control-Allow-Origin: http://localhost/covid-19/test/api");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    // files needed to connect to database
    include_once '../config/database.php';
    include_once '../models/user.php';
    
    // get database connection
    $database = new DB_Connect();
    $db = $database->connect();

    // instantiate useer model
    $user = new User($db);

    // get posted data
    $data = json_decode(file_get_contents("php://input"));
    
    // set property values
    $user->name = $data->name;
    $user->phone = $data->phone;
    $user->address = $data->address;
    $user->complain = $data->complain;

    // create the log
    if(
        !empty($user->name) &&
        !empty($user->phone) &&
        !empty($user->address) &&
        !empty($user->complain)
    ){
    
        // set response code
        http_response_code(200);
    
        // display message: log was created
        echo $user->create();
    }
    
    // message if unable to create log
    else{
    
        // set response code
        http_response_code(400);
    
        // display message: unable to create log
        echo json_encode(array("status"=>"0", "message" => "Fields cannot be left empty."));
    }

?>