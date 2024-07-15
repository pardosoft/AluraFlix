import styled from "styled-components";

const BannerVideoStyled = styled.div`
    height: auto;
    flex: 1;
    text-align: center;

    img {
        width: 360px;
        height: 180px;
    }
`;

const BannerVideo = () => {
    return <BannerVideoStyled>
        <img src="https://s3-alpha-sig.figma.com/img/bdd8/86c0/901ef8448792e2e2a7c9385b66af1565?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JAGXk60aV2lAGCrrFW7A0vUNfa2OBNPNtTLhttYwvmSWvzXLe3QjYZqJnWW8LNb-noQwVkOqMvavgkQCW0GWa0IMtU4bjZWzkUEOjpTgTBwepi1PB6GmkGVaKHUuFCyf6CwOrC4CRbOPARV9M6gpBRFC-MCndI-8hV5ANFNQUnxbXtnX17K0Wcp~owwsdX8~Q82X8dzAIymgqK6zR0OFsdHOENK76Bm8hM8MeSTppwCjc9C9efgNxTUYefJSCyxin7SGw8j91wm9Ojl6rxqcQiG52NCgyb5MCX2caqmCKKymDV-HYNXUioRNqa0hJvkuDnEbBr7FVoq94t0vFJfSBg__" />
    </BannerVideoStyled>
}

export default BannerVideo;