<?php 



$search_url = $_POST['search_url'];  // this URL comming from user's side

$category = '&category=performance&category=seo&category=best-practices';
$strategy = '&strategy=desktop';
$strategy_M = '&strategy=mobile';
$api_key  = '&key=AIzaSyDHJuyXxynaUPwCQscfd8N13G5QeYhDZEc';



// ********************************************* page speed api for desktop ***************************************


$new_url =  $search_url.$category.$strategy.$api_key;

$url     = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url='.$new_url;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HEADER, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, false);
$data = curl_exec($ch);
curl_close($ch);

$decoded_data = json_decode($data, true);
// print_r($decoded_data['lighthouseResult']['categories']['performance']['score']);
// return $decoded_data['lighthouseResult']['categories']['performance']['score'];




// ********************************************* page speed api for Mobile ***************************************

$new_url_M =  $search_url.$category.$strategy_M.$api_key;

$url_M     = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url='.$new_url_M;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url_M);
curl_setopt($ch, CURLOPT_HEADER, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, false);
$data = curl_exec($ch);
curl_close($ch);

$decoded_data_M = json_decode($data, true);
//print_r($decoded_data_M['lighthouseResult']['categories']['performance']['score']);
//return $decoded_data_M['lighthouseResult']['categories']['performance']['score'];



// ************************************ Return Desktop & Mobile data *************************************

$score_data = array("desktop" => $decoded_data['lighthouseResult']['categories']['performance']['score'], "mobile" => $decoded_data_M['lighthouseResult']['categories']['performance']['score']);

header("Content-Type: application/json");
echo json_encode($score_data);
return json_encode($score_data);
exit();

?>