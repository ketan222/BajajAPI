import express from "express";
import serverless from "serverless-http"; // ✅ Add this line!

const app = new express();

app.use(express.json());

app.post("/api/bfhl", async function (req, res) {
  try {
    const arr = req.body.data;

    const odd_numbers = arr
      .filter((item) => !isNaN(Number(item)) && Number(item) % 2 !== 0)
      .map((num) => String(num));
    const even_numbers = arr
      .filter(
        (item) =>
          !isNaN(Number(item)) && Number(item) % 2 && (item !== "") === 0
      )
      .map((num) => String(num));

    let sum = 0;
    sum += odd_numbers.reduce((acc, item) => acc + Number(item), 0);
    sum += even_numbers.reduce((acc, item) => (acc += Number(item)), 0);

    const alphabets = [];
    const specialChar = [];
    let beforeConcat = "";
    arr.forEach((item) => {
      if (isNaN(Number(item))) {
        const str = item;
        let str2 = "";
        for (let i = 0; i < str.length; i++) {
          if (str[i] >= "a" && str[i] <= "z") str2 += str[i].toUpperCase();
          else if (str[i] >= "A" && str[i] <= "Z") str2 += str[i].toUpperCase();
          else specialChar.push(str[i]);
        }
        if (str2 !== "") {
          beforeConcat += str2;
          alphabets.push(str2);
        }
      }
    });

    let concat = "";
    let k = 0;
    for (let i = beforeConcat.length - 1; i >= 0; i--) {
      if (k % 2 == 0) concat += beforeConcat[i];
      else concat += beforeConcat[i].toLowerCase();
      k++;
    }

    const ans = {
      is_success: true,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      odd_numbers: odd_numbers,
      even_numbers: even_numbers,
      alphabets: alphabets,
      special_characters: specialChar,
      sum: String(sum),
      concat_string: concat,
    };

    res.status(200).json({
      status: "success",
      data: ans,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
    });
  }
});
app.get("/api/get", (req, res) => {
  res.status(200).json({
    status: "success",
  });
});

// app.get("/api/chk", func);
app.listen(5000, () => {
  console.log("server is running");
});
// export { app };
