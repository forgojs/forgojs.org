export default function html(contents: string) {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="/styles.css" />
  <link rel="stylesheet" type="text/css" href="/highlight.css" />
  <link rel="shortcut icon" type="image/jpg" href="/img/favicon.ico"/>
  <script src="/page.js"></script>
  <title>Forgo | ForgoJS</title>
</head>

<body class="bg-gray-900 text-gray-300">
  <div id="root">
    ${contents}
  </div>
</body>

</html>
`;
}
