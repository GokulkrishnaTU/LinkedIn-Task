import React from 'react'
// import Sidebar from './Sidebar'
import { MdFeedback}  from 'react-icons/md'
import Follow from './Follow'
import  { HiArrowNarrowRight} from 'react-icons/hi'
import Links from './Links'
const foolowitem = [
    {
        id:1,
        logo:'https://fellow.app/wp-content/uploads/2022/06/hr-meetings.jpg',
        title:'Samara Shaikh',
        desc1:'HR Executive- ACT Polyols- A group  ',
        desc2:'company of Akhtar Group, Candyland '

    },
    {
        id:2,
        logo:'https://cdn.siasat.com/wp-content/uploads/2022/04/Tesla.jpg',
        title:'Tesla',
        desc1:'Company Automative',
        desc2:''

    },
    {
        id:3,
        logo:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRYYGRgaHSEcHBwcGhoaHB0aGhweHB4cGh4cIS4lHB4rHxoaJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAPgAywMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgcAAQj/xAA/EAACAQIEBAQEAwcCBQUBAAABAhEAAwQSITEFQVFhBiJxgRMykbFCocEUI1JictHh8PEHFYKSwhY0orLSM//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAAICAgICAgMBAQAAAAAAAAABAhEhMQMSQVEiMgRhcbET/9oADAMBAAIRAxEAPwCnh2NxGDIBm5YJgDdlk6R/aug4e4HQNBhhMHfWsjbVSEVTILgmdxEtr9BTjxCt5UtnDsA6HNB2YRGU1Oit6GbYaDIoPiCBiikfin6f71TwLxCl/wAjgpdHzI3Xnl6imt7ChnV525UUCdHr6gx6iinGlDOvmX1otjpTRIAF83vTE6CgbY8wq7iqMbfkMNIIPpQwI8QEpElZMSNDrSXhlxkvmw7F1YSjNqe6k86J/bs6qjiHDCe9U4pJuI3NW0qbtlJYD72HNtsyfKdx0qvCXkJK6SdZ706ZZXWgbXDkZWygAjUGivQWZzimAvvdADwmmadzrsKM4Rwq3buMyyXK6k9JG1SxNxVdFec06Rz9e1McMCXJiBFXFKiWwDiR1HpRnD/k+v3qvGosyzKABuTUMHjlIIt+cCdeU9KtyXWiVF3YQlnzSST25V8S4iGPKCZ0G5NKTcxLvlICIDrGpjXnyr3DuDBLvxGcu2oAJnQxU5ZWD2L42VbIlti0gSRAEkf3rz4fEO/nfyAjRdAR3O5pjcBDeVJPX/NWumsloHShR9ibKsfaGTYaQaAVSHQ7aim2MWUMdKUFdASdjVx0RLYy4rhc9sjmBI9RSSyC6FW0brzBHOtLcWVrOYm5kuqfwv5fesmao1mBVsi5jJjeroqrh7TbX0q6K0MzMXeDqLiumgEyv9UUTin8/oKF4B4gTEjLBRx8yHl3B5inFzDhh361kzRYYh4jwZL6zqrqZV10ZT1kVLw/jL+d7F8Bimzj8Q7jrTVbJUUPwwTcuNHOPpp+lJbKbVB6AZxV1/QVVZAzn0q++PLVEAlj5hR7EbGgsMnmolzFACriSKHAIg8mHWqFWWUyCQ1R8W4R3RMj5XVgVNJ+H8XlvhXhkurvyDDqtZvDNFlG+jy1DCbNSzB4+IVzodm6+tMrDeR/Q/arTIaoS4nFW1YlmBboNT/igcTxrLtCDqdT9NqVLbZmJZwgDnQbkSd6bcO4dbggITzlpgn3qezZXVIklu3fRWY5jybv0I60x4fYCrlAiCaU3EKNEQnMbQetNsDis2hPoev+aqM8dWEo+USZWzDURPuaot5BcgSWnfpRRsgtOtfXZV1YqOvU1pZmQdGMhTA51J7KkgkEmKB4hxZLZIysxOwANC3MViXClAEDD1YfTSkn6CvY6xDqF8zACIPakN7iFlT5Fa4e2o/tTPD4LyAOSx5k96DS0BoqimkxSaQRaa46ZicsiQBy7GlrOHVSROsHsRzp7hdUHpFZy7bKXSg0DHMDynmKzkqZcXaNH4cxOZCh+ZSQacxSXgNlc7tHmIH+vvT2K0TwZsxHhi2Jd41LEfSF/wDGhrfHL1hz8dM9pmJV0ElAToGHMAcxTPgaMlmXEMBLeupP3qSqCvas5YNUr2M8JikuIGRgwPMa1CzhghYj8Rn6maz+I4a9pzcwxCGJZTOViNduXrT7huKa5aV3XKxGomdfWiLsJRotw7SWNW3XgEV8wyaH1qGIFUSewh1NEXN6owi71eW1pMAPiOEZ8pB0G4pVj8Ij37bFAWCnU+1MsXxpLV1bdzyq48r8s38J6UTcwau63AdR9CKmrZSdIhewIKRGlXYG3Fth2NEZoBr1o+RvQ00ibMnw/hwW6zscxOuvLXlWqwCAggis9h7kv7VoOG86EsDbyZbit1kvENqu3qKglzLqDKnbsf8AFMOK27b4gIQcw17EVFuHhUIiBr7/AOaxadmykqJNduuAEYLtOm46ihm4NNwO7swBBAJ0+lfMLcKnfy8j0plCv5iTIiR+ta8ck9mc4taLLyLMss19WSoyiP0qy7I1Ak14hiuuhn8q1WjJkkUga0tddSB1pmiQDzoN7LFjA0oTyKStF2APljuaW8ZtmGjeJHrTHDuqGGYT0oLH3w7ELoR1qZFxWCzwxis5U9Vg+orUZaw3DsULbo2XKCYbsetblYOtCeCZLIke2CCOtBNhSsRqKFxfF1w1q210khiFLRqDEywFNMHikuKHRgwPQzUstNoDxTkK4P8ADH1/3ovDHKijtULuHzhxtqPyg1YdFAoSocnYThD5ahialZHlFBunnZpJkAQToI6VRIbhDoa851r5hvlqdIBHxqyr3ERgCp3FC+H711LzWgc1rdZ+Zew6inuJwIdg/NaWYGyVxDSCNPbnU1kq8GhubGo2vkb0NTnTWvSPht6GqJMybyo5npTThXEQWOmnWkmDwoe6WfWBzrT4awhQiBUqynQrv4cNiS/pFM8dhs1phQVnEEGHG3OmzuDbYg8qeGgyjFYNHBKlTlJjX71cl1keNo2P6GmfCmLp5x5gx1+xpXxi6FuZGGnX9axa6qzVS7Oh7bxAYBpjSD2oe/xW0k+bNH8Ov2pZhGB8r6g/QimmGwdtVOQDKe21bQl2RlOPVkMLxF3kIhVY3bn7UPibFxmg3CF6DSmloDYVRcBzdorRLJm3gF4dglVydyRuddqo8QSjpcHyjRvQ0ww48wqXFbIdIOxFKSCLFWEJMZgCAwIPUTp71u7Q0Fc9wd0K5tTsJX0rfYW55F9KUcoctnPvFN1P3dtxuCZ3HICapThMZXwj/Dc7rujAdR+tF3rbgZbqC4oBAI1qmzhcoGR9A099QAAKhuzRYGdnjAR1s3VIZwIYDys0DMO2vWmuIAilOITNftg/hUkH1IGv0plc3iqJYYiaCgW+Y+tHbUEdZPc0xBWHXy18B1qyx8oqs0gENzjF21iHUpntbyPmXrpzFPsHi0vKHRge4pHZIOIdah4dwqpfuFdNdhtsNYqU8lOKqzRXngRUUaEb0NW4kaVS4/dN6VRImw2rkjpFF3eNWMOIu3FQnYGSSOsDWKyXivjjYa2EtmLjnfmqDdu2sDrvG1cwv3L2IuBQzs7sAMzs0knodhQkVR1PE+KrId3D50PIAg7xPmjSreHeNsMUOZyg559jrB1UcutYfjHgbEWrYcXBcgeZQII6x1rHlypIaQQflIgiNpn2pJRehtNbP0XwnE23XPadWXsdu3aqeMYVGvIGGrAweWnKuFcB8RXMNeW4rtEjMJ0K9COddzt4sYhLV1R/MOsHSpksUCebRXxHDC2FB0naPvV2GxYSFOv6ii+LWFuIgYwZ0/tSi9hMkZjoDAJqMxdotVJZNAkaQNKHxA2oTCY6GCk6faj8RbB3YATM1vGSbswlFpUD2yJB70RiVlKDfF2U/FmPbWrXxrFCVQwOvSqk0KKoQYmynxAw0dRp3Fabh3GLfwkzETGutIb9xMyMR83ynudY96Y4XCWsolF58h1NSimY/AcavWgFPnTnm+aP1p9gcXh8Q3klXBBynSY12oPGcI5rB+9DcFwpXEBmX5VZtf6SP1rNbLaxY4fEXLT5mTMknUa6E6feimuC7BR/L0G89qymG4zeQmT8RP4ToR700w2Ks3GBRvhvuV7j8jR2CjQ/HdN/MvXnUGxSjQAk9KHsYt5CuszoGXYz1rz4xFJA1M6gVSeCayM8NjFOmx6GiUFImuM+yZe50NTR7o+V1aN1oyDQ2fCISWAGYiJpZwvAvbd82xMg9tKX2eJXrTEOM6T/ANQH6in2Dx6XVlDPUcxQqG7qiy6xr2b923pXy/QHF8ULeGuOx0VD9Y0/OmSjjXiG++Mxl34eqJCyflCJ5ZJ/hnMe886cf8P/AAzcNz9ovEKiEqqkGSykqSOijUf7UH4AxaD4q/DZ7uZbgaFyCPKoM6zmuHlz5RNdOxVpTZyLmEc1JU/VSD+dZSk1aOqEE0pE7uKRlYo6tl0MGYPQ1z7xfwdb5z/K4EAjmOQPXnR2F4DikuXMQzxbCkzmLlwJIVp3AnQmSPrSlfESXmyhGEaZgJHSd5iTvFZtyu4m1R61I59iLDIxVhBFd68PXSuGwsiP3KSO+UGfzrjHER8e+5XbMqKeUk5RPrDGu3Ynh2Q2EViFRAp7wIrd20jiwpOtD+9bV7aMNYM/SguN4T4lsgGDOhoi2ciLlHPUdqnjUDow96GrQk6YisYU2kzuZ5Cauw2V/nO+2u1FcTwnxbAUmIcUtuYX4RVC2/XnUfVl/ZBxwqr+GmSoChHUfpQWGxKt5DuBv1/zTGyPL7Vu2pKzFR6ujKYMG27WXEpuh6dqcT2oXjttsrFBLASPaqcLxN8i5l1jWpWCtjZQrTA/zVf7NGbupH1pJhHVwGw18RyUmRTi3jmVC11cuUgeXWZ50JBYmxXAwdV0PSk2J4ay7j3rdWr6OJVgaquWA0gct6hxKUjK8AxN0Xkt5pTXQ7iATofarDxhyzKqqup13O+9OcJggt3NEQrfaqMLwhIkjvNNJ0JtWK3v3W1LttHl0+1fBh3UhwxSPxE78/f7U2xOLt2hAgn8hWfxePDK7ufIInuAZy+5GvpW0OFvMjn5PyUsRHjcYUoA4Vz/ABRH01qGB40iElV33E/4rApxV3CnmZJ7FjIH0q+5mDEgnykCtekfRh/05PLN/f8AEubRUAMAyTPOO3T86xXjPiGIvFlLKtlVdwi5jCoBBcgQXdjpOgA9Z+PiLmV2TLmRWPmBIOmYRDCD9eVK8PjHdGN9RDHKQogZSMwaJ0I+ny96z5oxjHCN/wAaUpS+TLvB1jJhrzZsjFrbZt4QayR9TWtxXG2S2iJbZ1iHuKQAoG2p5/bSaQtetC0LS7MIadz5QuvsKz9/xFesWv2bLlK/K4/EAdCZ0OgiuJfNnq4gkmalvFRKfs2Rsr6KSADlAmc4dg8mDOm+1J+K2LeHsm7oG1CRzdlK+8BifakB4hbGRyCXkPC+UFlJga/Lruek1rPCPA7vEW+PiSP2dScluIDESPXKD31NWoZsznzJJpA3/Dnw61wM1xYti5bcE6SbRYkD0JAPvXWMevmQ0Pw22BmVRCgmANAB0A6UZjU+U9K1OYpxisbZCmDIg9KsSVGc6mBPTvXrvyNUNWtsJiVqRFgdXtsAdQQYqrH4VbmTMNeRqOBs5LTEakASesUVYvq6LG4oq9jutGXxd4W3KCcwE084LxH4iwYDfeoY/DqXJyjNlmetZay9xIcjLDVKfVlV2Rq+Iq0HLvy9aCsklQWUBjv61fhscLqfzD70Hbu3QIZBOv30/KK0I0LcT4WSc1slG6qcp/KiluX7GGBP7188eYgEpH3rPW+KYq6BlVvYQPqab4nCXHw+HQvkeWZi28k7aetMzTfklh+LYZ2hw1h+/l19djTlGuKJQrcX8/rQeD4ACv71xc9hQV/hwwzBrdxxr8gYBewYtoPbX70KLkxvkjFWaBsciqXeVMRBGsnkKzHE+Pk6LoOQ/v1oTHvdclmIJP8ANMDtGlKLhAOs+v6etdMYKKOOfK548F2dnOp3oDxbigttbSnmCfWjsO4UZj7f39ax/HMV8S6xnRfvt/eqlKkTCNy/gw4HbJKTtvrttT+/aOeNNXnTXSDrp7Uk4OcrW4AMKTBmJK6bdzTnEcTdrio6qrAz83lKnTyGJB02j+4UcLISTcgrDL+9KnYqAfdaQriCEKcxl17hmUj6KKb4riNhbhYOCeYBVm36AidOkmkd8jPc6ZmI7gkEfeo5fq1/TTgtTTf6B77GZFCDGj4ioVL5mCsC0aHTKp5HXfl0NHXTpNITb87MCQEgyN80+UDvOvsa4OJXI9nnlUcG8wv/AA3zG0r3BGQu5QyCWaVS3PILOp5muqcPwq20CIoVVAAAEAAVifCPE2dSjEB0gL0KhVlT6GY7VtcNxETlcZT15H3roap0zhjLsrQNgnhm/qNFY/UIe9D4ZPO8bZjROLEIvrSGRZZVh2qGHXykdqnEqw7VHDaCO1AH3DQUZDswipfAVEUqNoH10qGGP61dbueWDQBWwzEMdCNPak3E8BntqswQ/wBaa4pCxWDAnWqXcHMh3BFJoaZm9bVwgA5QaZ/84bkoPuKK4xglddTB0g96Qrw+5zpK0O7HwsC2oCqco5AT9qhjcR8ifDLys8oE0dbxSxrVHEcOGQujEMo5f61Fa/oy64E+Kd7Y+JORQdVHmLc4HSsdxe0MS+a6xIHyrJgdz1NNsbxw3bbWniZ0O2o0/MT9aQ5iDBrXiqjm5FJSAr6Phx+7ZmSdV1IA6qeXpXrXFFYAuYUcuvvTBSToJP1H0/2pHxbhYRsxcKIZmUsCwIUsIE/iIA15kVUm1lBFKWHslxLjsg5NBt3/AMUoW2coJ3bX25UPh7Oe4q9TB9NyfvTbFLNwKBzAFQm5ZLlFQVIb8PTKUP8AL9iP7imXErAdttt6E4hlQW9ABMGN45x9Kg+KYgOCTqSdzpt+hrXxRz1bsX4rhyq/lUAHWK9jmyB+6g/QAfp+VWYjElvMI0PTkOvtQ/FHBRiP4D7SV0/10rOSwzbjb7qwX4jFNa+cJtiHLbeVgOuUwR9Gn0FVYfUBZnTXsP8AWlG3cQqKqbFzmY9EkZV9TAPt3rm4YVbZ2/kzuorYz4JimQoZ/Czt3k8/UD8629jHuqqw86ETB1IHQHttXPn8gDDWSEH56CO610zwrg8+CRmjzFyP6c7BfqAD71pyrBz8DqX6CeG8TRj5DB5o2hpzcxSugGxnY1mOJcBI8y6HkRv7Gg7PFrlry3VLqOf4h/esVKtnS43o3FvY+lQsbilPD+MK4lGDjmuzD2pnhrytEb9KpOyWqJWtDHrXyy2jelSHze9RQaketMRIHyj1oe9b+eBqdferk+X3qN1o1HSgATGAlArb6EHuDRSJpqKoxNybJnWJ+o1pfg8bcdFaAJE0AKH4woMNKkgEZgR96c8LxwYfMCG0qjCeIuH4qELW28oAVxlM/wAMNvFH2vDWG3QMvTK5ie3KsFzyvKOqXBFK03/pjBgwuLe2yK+krm7azPpQPEsMUcowAYeYCd17dentTXxJgbzuwtmWQ5c+xIJGp9P71G74LxPw2c3g7qJUAENpqQGJ3PTnXVCau1pnFzcTyntGWuYpWYL8Qoq/MVBkmCYmN4G1fHv2YKreDk6RcQhQDvqqF29JFRxd9k+EcqqwYls2VQWIK5mkEUdcuXAFOW3cLxoqIBtOjMozaa/LW9nLVZM4llbVzMpDKRAZZKzzAJ7Rz51FGzOD36VrGx1yxYLsB2iJlo2HJBoJ3Y9BE5U3i7A5SrEak/iP8Wv6VLqOC/lK2PuIIGRSp21/KqeHXVykGI29QDQuH4gynJc1U6VPEpkaV+Q6jpHY8qqzKqVB9/Cr8yztG86e9L7+BlSo2YEDtpIGu+oFGYTGiImR9qsxDhEeWOYoSOmxAjoOfvQ1Y02mZzCKyrAsuxPNtB20AmO00bZ4WdWunVtY5mfsKirsNUJg8qGxXEWHlHzHmeQ7d6ikkatyk8BCYglvh5gVUGWiTIB1B6jbuZrrvh+wDh7RtvlYIspMgafLHUCB7VxzhmHLZVG7sF9pBJP5V1rDcKygwIIOhUwffrWfI8I04lcmx22JcaXE0/iGoqjE4G3dErBrP3/FD2HKOPiIOezf2NHYTiuHvQyMbbnr5f8ABrG0dFMX43w6yNmQkMNo0NQs8ce2ct5SY/GujD1HOtNaxboZdQ6/xLv7ih8RhrN4GIzdDoRS/g78MngOKq4DBg69RuPUcqZWbqsxKmawuP4DctNntMQe369ajg/ED22i6IP8QGnuOXtVKRLXo36DRhSvxDedLMopZtNBvvUOH8bRxqQZGhG1NUcEAjXWqJKcM+awGZSDEleYkbUuwjjIPKRv9zTxBowrN2cVAjoW/wDsaYHA5p9wDxZicKf3byv8DSy+wmR7Vn6+ik0nspTlHTNxhvGV246IF8zsAx6yRXX7FwgCuF+F8OFuLedW+GjDMQJg9a6vjeMFfg/CAdbjAZgRAUwP1/Kp6qKSWipTc23LYv8AG3hhbua/ZOS6ozssSlwoCRIkQ8j5ufMc65QvGrwYsrBS2hIVZjpJE/nXd+IvLsswIjuNK4NjcGoICBie+ulapt6MWoqrLFxt675WuMwO4YzznnWiw+BDgWyNT0OoPUVlGtfDIOaG3jmPWugeDcQjoWOjjed/btWPIpXZ0cLg11oGs+CMQ2jXkydSDmHqNj9aPw/hC+gyC4l1D+EqyR3DDNBrUvi2CO1pfiOg1SVDfQnX0pHhvFpZGW7h7yEHVgGDCTyAObQcoqozm9BPh4vKMxxLw/ibBzBGdJ3SGIPSBr+VLcSxu2zlJJXWJ3UGSB19K6Otl4AtYq6yMJIuW1zLP4QRlM9yK+Y3gdi6VZ7cONS6syM39eUwfpOm9bxUpbRyzjCLw8nLcPiQFmdAKBtsWYtzY11j/wBIYMz+5Ou8PcH5BoFfB4PwQ8yo6+jt/wCRNV1ZCpXRiMA6KtxZAdUIX1AzEr3kR6Cu38LyvbDx86hv+5QawSeFcKoIX4oB386mdZgkrtW04RjraItvUQoUExyEa1M4uh8fxbFPF+Do+IRyNTIqP/JRkKxpPMaU1x6n4tsgaTv7UytDyn1rCUbN1Jo5tYfFWbrIj+VW1DAlY7cxTm/xlFMYlMhOzr/qRTu9ZVr7+i1Xx7g6XLLA7ggg0upXYFw+IYgNadbq9CRMetU4nD2rnldcj9CIpRi+DGxZZ0kMvNdP96FwXGcRkJvoHQdRDR1pARxfB7lpi9poB6ag+oonhviN0IW4Csf9p/8AzX3BcYtvPwnj+R9vY0beso486ZSeY1H1oQGl4dxdHnUAkdaw3EbjLddQ6/MfzM/rUrnBnTzWWBG8bj6cvas3xO5d+K8prOv0qrJaMbZs5q9bAzQdqilwjQV8U6yaoRv+HOcMio4U27olHGqmRqjdGHTnyplg3OHdbltc9sNma3zHVrZ69udY3gPGxbmzeHxMO+jKfw91PKO1aW25w7qrNns3P/53P/BujgfXegDZ/ttu8Wu2zmU7HaIGxB2PauUcQYpCIv7x4LMNWg/Kq9J3PqK21oOxd8OVXk0/JcbmNNiBpm6wORrF8QuPauOzqUuFSFBGxaASDttIFVHFkTVtHzh+AWYjPc581U9CeZH+iK0dnhIWGa4Q+4CtkgeymF7kGY5VRwlVt2baqIZ1BLRMFgWkxrygHWOlMsPbMyJMbHVjOoLnLudCB6VrFKidOwFOF3HuMy3bgYnfNDEDQFwNBtoN4ia0WHxvN2zm2Amd4jy8lygTBmSZ109F127lGRSUnVmOhI5kUGt4uQqeW0mgnmR+Ju1NRjHSBylJU2aO3xQxIhfYae3U15uJN/Hp7aCs02PzE5T5F0HQ9W/tVS4omWJhBuevYVXYnqal+MuD83IE6DQH5RH8Rr3/ADtgyIVDOwMDeEX5mb3hR3J6VjsDimuNpMsxb+kbSewFVWOInPfuqJk/DSdAEQaknkusk9+sUuwdTd4zELlDsyr2HXoKUXsWxM5jQGDzXFUsDlAMuwgu3lnKp2Qcq+YtOU0OQJGz4JxxWQJcbzZsqk852HrvWltP5WrmXBNChbb4ok/9LV0XD3lYNlII20Nc092bR1RStrzl+oH5VdxRz8Mgakx9xWa4TinOKuoXJRQCAeU028QcS+BbD5cwkCBvrpU5KCMck4dx/KftS3BcPS5h8pEyn6Uzt3Q1osRAIkjtFQ4PfRllCCo2jbSmBlcB4TR0IU5ZB15gifz0paMLicMjFWZwpIIOoiSPat/gCFJ9z9TVbqGRxyOtKgsxFnjqqVFxTbY9NVPr0ojFYhGYnMhmOnQU5x/Bkc2iRvoayeI8NjM2vM/emM5nTHh2Ae9K21UkCTJAJjoTS6tj4P4arq7MWBBABUxyk+tMkzt/hd9PmtOP+kkfUaU88KcQVm/Zb0tauaRzU9V6Ebg9q1Nnh1xT5L47B0DD6iDTuxZxKkOcNhrjDZ0bI+ojmp5d6AszOAZ8PdfB3DJT5G5MnKO/WmmJ+HcXJdQOvfcf0nlSjxTbxT3kvfsrqUOpUh5WII8pnl0ovE2XjMNiJHoadCBb+EVMoRzlUQA2jARETsY06bbUV+1IqQGGg57670oxd5gKz+LxBneqUhONjTF8TDNPIbDXL01A7SPeeVXNjS65EkDmB071lWvGp4XHMjZhJ0IE8po7B1NMLMmCYRR5j2HKl2LxRusFQZUXRR1/zQ1zimdQswOY61LC45UkiM3LoO9PsFDJsQLGW0vzvq7dF/hHr+laLg/CALNsswyxI0GpZi3PeJj2rDcOQXsQikk52GY9t2/Ka6LinTSQWAEBQfKANBpVxzkmWCGJvBBAk9zB3J+mwpVdukmKnir26iAsxHoI1+lLrjRrzO1EmEUM72ZcMziAA6zPeV0r5wvxU9kQCMvMc6WPhmvM1tGGcDypMKQgEhp0Vi1yQdtCDG9J71u4hZHXK43DCGHtXFyKTlaNHh0b/gPFM+Jd1AlwBB5RWh8X/wDtp7j+/wClcn4bi3R1ZNzrP6V07jd1m4fnMyVBM71UW/IIdYFs1qOqfpQHhWBbjoWH50RwRibCZtyg29KC8OtAcbQ7frVgEcJhXuKCT521NE4JGIdCZOuvpNBYYFb1wHm0j0Io/B4pWvNlEAGD9dfvQMqdjkR4nK0GOWtLMf8AC+I0nWaZYm7+7fLtn/z+tAY2wGcmN4+woEzjHDuGPdZVCsATq0aAV0jhuAW0mRR69zX2zxPCqIGce1FJxrC88/0pgfClGcKZxcWGYDmBP22qNrj+DB+Rj660Q/jDDJp8Mj0WPtTQmP7d5yWzBcv4ep9aEtrayOjplygsB/KZ+U8wG+4FKf8A1vhOauPag+I+NMMwXIr6TMjQqRBH0+1VaJqQq4rhlM1isfh4JrR4/jiGQs+sbjlWcxeKDHQGkWhZdWKHNFXXmqApJgbmkwPiITtVj2Yo3hmDzEkiicVbj/Ov329qkZd4NtfvmY/gUx/UxAH5Zq1l2/HSCeZjuftWe8MnKt1oGuUaT/Mec0wuXRMESYP9tvet44iZS+xDE3NdapRszr21PSBr9hVT3Jkk1SzxbuvMQuUHu5y6exNJlI9gcY1ty+VlLEklXQTJkjzAE77VrMDxS3dyi/YNwAQC1tSQOzoxMflXPrF64NmVhzB5+o50fZyn8CK3QopB/pK5TQqqmDXk3nDOA2xjReVP3eU5RyDfzKdVMe1GeKuOotp7OUknQQNN6x3DOJvbPSOgvKP/AJZlrUDjIvWyhCBzEMQIJnZtNJ61EuPHxBS9lHC/F6oiIyMYWKlwrjyozl0cBmLCFO1YbjeJdcTJGVljQbVr8V4muIiNkBzLOw/tWNy8lLJX4k8UFnzWVZTAEkGSRWes+Kb6sSGKmZ1G5pvi+LObltSFJaCDl0GaP70tx1xrzkMizbBJganb+9Tl+x0aLg/ib4ttkf55B9dYrULdUgGeQ+1cvs39SbdoK7AqGg9J/SiMB4tvpbCF/lkc+RNaRbrImCq1WK1DhqmHpjovBqfzKRzG1Di5U1ccqYitcKTVg4eTVy3a+PiTTAobh4ygnl5T7bflFLr+HAph+1alT+Ifmuo/KaDvGedMBfcSKu4Jw971+3bt/MziDtEGS08oAmvjp3ozA41rJm2xRiIZhuROw6CgDacY4GbV9zkKo5LL011IHoSdPSs9xLCjWvf8/uMAHd3jbMxaPSTpRPD8US6sUDrMEMJXX1qQB+FYRravmEBirA7giDqCNDXrl3Q7dO+/+KfcWa3kGRAgJlgNiY6ZiPyFZu/OUiCBpH51tHRD2Cl6ZYPw/exWGumwVLI6koTDOAraJ1MkaafWBSq8a2/gC7aP7hnKXnJdCQGVwFGZY/iG/cT0qWUcuOZTBkHYg6GRoZ95+lMMM4US7GOgrpnijgCuxc21zkwy6ZXP8jfgfmDpOx5Ecx43hUt3MqZssT5hrP4lE/wnQzqCDSToKtWMreJtsBBboCZVhGwJU6rHPtRGGviYOh7mfvSDDMS0jQLr2EdTTQuGb1/1Ooq0xNBXEb6sUdhPw2UExJKNPlPUTEf1HrW8IV0WEXLGmmwNY/BeHmxKyrKqKy5ix3G5C99q3ZeyigE6ARsTtWbVsFjQC2FkgwuggGNo2rDcf41etYhlAUFZ1j5gev0roy4q0BKkn10+9KcdgMLfYu6Bm2nWlSHZXg8K72VcAZikjQRJFczxFi4GYFDIJnymuwYfiChQiBcqiB2FQbHj+T8qKCzmYeom5Xq9SKPhevfFr1eoAmL3epC8etfK9QIhevGAehH3iovHpXq9QMHuAiqS9er1UhERdIovDcWdCPMY5869XqANLbv5kJLSNDPaOVLrr51LamG0G0ACP1r7XquOiHsWM+tfOJ4pldCjFWTVSNCG01B6yK9XqmQ0bzgP/EhHi1jbYgiC6jynuy8vbboKyvje5bbGXPhuHQBQGgMT5ATBHzHWJOump0r1epDFNtGfSIUD/XajmUAgbmK+16rEbjgcpYVZiZb66fYCjGuV6vVIz58QdqiXHavV6gCOcdK+QvQfSvleoEf/2Q==',
        title:'Ajmal',
        desc1:'Founder and CEO at Devsinc, Angel',
        desc2:'Investor'

    },


]
const RightBar = () => {
  return (
  <div className='
  lg:mb-20  xl:mb-24
  '>
      <div className='sticky top-[51px]'>
      <div className='hidden lg:flex flex-col'>
      <div className='mt-[38px] left-0 lg:ml-[1px] xl:ml-5 space-y-2 '>
       <div className=' xl:w-[350px] h-[420px] bg-[#FFFFFF] border-2 rounded-lg '>
           <div className='pl-3 pt-1 flex items-center justify-between w-[320px] '>
               <h1 className='font-semibold text-[18px] text-[#000000E6]'>Add to your feed</h1>
           <MdFeedback className='text-[#00000099] mt-1'/>
           </div>
           <div className='pl-3 pt-2'>
    {foolowitem?.map((item) => (
            <Follow {...item}/>
    ))}
        </div>
        <div className='ml-6 mt-3 text-[#00000099] font-semibold'>
            <h1 className='flex items-center space-x-1'><span>View All recomandation</span>
            <HiArrowNarrowRight className='
         h-5 w-5   mt-1'/></h1>
        </div>
       </div>
       <div className='h-[200px] w-[350px] bg-[#FFFFFF] border-2 rounded-lg'>
     <img 
     className='h-[280px] w-[350px] px-2 '
     src='https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png'
     alt=''
     />

</div>
    </div>
 <div>
 </div>
 <div className='mt-24 '>
       <Links/>
 </div>
    </div>
   
      </div>
     
      </div>

  )
}

export default RightBar