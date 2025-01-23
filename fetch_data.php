<?php
// データベース接続情報
$host = 'mysql310.phy.lolipop.lan'; // サーバー名
$dbname = 'LAA1518191-harutomiyai'; // データベース名
$username = 'LAA1518191'; // ユーザー名
$password = 'FxWxTnWtVejdUq9'; // パスワード

try {
    // データベース接続
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // データ取得クエリ
    $stmt = $pdo->query("SELECT day, link, startTime, endTime, className FROM schedules");
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // JSON形式でデータを返す
    header('Content-Type: application/json');
    echo json_encode($data);

} catch (PDOException $e) {
    echo "データベース接続エラー: " . $e->getMessage();
}
?>
