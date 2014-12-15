<?php




if ($_GET || $_POST) {
 /*   $data  = json_encode($_POST);
    echo "<pre>" . print_r($data, true) . "</pre>";*/
/*    $params = json_decode(file_get_contents('php://input'));
    var_dump($params);*/

    if ($_POST) {

        $_POST['id'] = time();
        
    }

    $notes = [
      0=> array( 'id'=> 1, 'label'=> 'First Note', 'author'=> 'Shyam'),
      1=> array( 'id'=> 2, 'label'=> 'Second Note', 'author'=> 'Brad'),
      2=> array( 'id'=> 3, 'label'=> 'Middle Note', 'author'=> 'Someone'),
      3=> array( 'id'=> 4, 'label'=> 'Last Note', 'author'=> 'Shyam'),
      4=> array( 'id'=> 5, 'label'=> 'Really the last Note', 'author'=> 'Shyam')
    ];

    if ($_POST) {
        $notes[] = $_POST;
    }
 

    echo json_encode($notes);
}
