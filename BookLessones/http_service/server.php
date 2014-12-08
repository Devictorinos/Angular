<?php




if ($_GET) {
 
    $notes = [
      0=> array( 'id'=> 1, 'label'=> 'First Note', 'author'=> 'Shyam'),
      1=> array( 'id'=> 2, 'label'=> 'Second Note', 'author'=> 'Brad'),
      2=> array( 'id'=> 3, 'label'=> 'Middle Note', 'author'=> 'Someone'),
      3=> array( 'id'=> 4, 'label'=> 'Last Note', 'author'=> 'Shyam'),
      4=> array( 'id'=> 5, 'label'=> 'Really the last Note', 'author'=> 'Shyam')
    ];

    echo json_encode($notes);
}
