export const GET = async (request) => {
  try {
    const res = await fetch(
      'https://api.bridgedataoutput.com/api/v2/zestimates_v2/zestimates?access_token=4b0f974b3aed829530a847ae2d07441b&address=74%20florida%20st%20elizabeth%20nj'
    );
    const data = await res.json();
    console.log(data.bundle[0]);
    return new Response(JSON.stringify(data.bundle[0]), { status: 200 });
  } catch (error) {
    return new Response('Something went wrong', {
      status: 500,
    });
  }
};
