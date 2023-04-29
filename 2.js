// 통과

function solution(n, money, events) {
  const eventsArr = new Array(events.length + 1);

  for (let i = 1; i <= events.length; i++) {
    eventsArr[i] = events[i - 1].split(" ");
    eventsArr[i][0] = +eventsArr[i][0];
    eventsArr[i][1] = [eventsArr[i][1][0], +eventsArr[i][1].slice(1)];
  }

  const calc = (num1, num2, op) => {
    if (op === "+") {
      return num1 + num2;
    } else if (op === "x") {
      return num1 * num2;
    }
  };

  const visited = new Array(events.length + 1).fill(false);
  let maxCustomers = n;

  const dfs = (customers, needMoney, road) => {
    maxCustomers = Math.max(maxCustomers, customers);

    for (let i = 1; i < eventsArr.length; i++) {
      if (!visited[i]) {
        needMoney += eventsArr[i][0];
        if (needMoney > money) {
          needMoney -= eventsArr[i][0];
          continue;
        }

        let newCustomers = calc(
          customers,
          eventsArr[i][1][1],
          eventsArr[i][1][0]
        );

        visited[i] = true;
        dfs(newCustomers, needMoney, road + i);

        needMoney -= eventsArr[i][0];
        visited[i] = false;
      }
    }
  };

  dfs(n, 0, "");

  return maxCustomers;
}
